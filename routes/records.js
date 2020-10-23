var express = require('express');
var router = express.Router();

const Records = require('../models/Records');

router.post('/filterItem', async (req, res) => {
	const { startDate, endDate, minCount, maxCount } = req.body;

	console.log(new Date("2018-05-05"));


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
		res.json({
			"code": 5,
			"msg": error,
		})
	}

})



module.exports = router;