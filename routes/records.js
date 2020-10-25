var express = require('express');
var router = express.Router();

const Records = require('../models/Records');
const validateAPI = require('../validate/validate');

router.post('/getFilteredRecord', async (req, res) => {
	//  	~~~~~~~~~~~~~~Types~~~~~~~~~~~~~~~~~ 
	// startDate,endDate => Date
	// minCount,maxCount => Number
	const { startDate, endDate, minCount, maxCount } = req.body;
	//validating values
	validateAPI(startDate, endDate, minCount, maxCount, res);
	//rearranging response
	try {
		const records = await Records.aggregate([
			{
				"$project": {
					"key": 1,
					"createdAt": 1,
					"totalCount": {
						"$sum": "$counts"
					}
				}
			},
			{
				"$match": {
					"createdAt": {
						"$gte": new Date(startDate),
						"$lte": new Date(endDate)
					},
					"totalCount": {
						"$gte": minCount,
						"$lte": maxCount
					}
				}
			}
		]);
		res.json({
			"code": 0,
			"msg": "Success",
			"records": records
		})
	} catch (error) {
		 res.json(error);
	}

})

module.exports = router;