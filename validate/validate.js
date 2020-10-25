const Joi = require('joi');


const validateAPI = (startDate,endDate,minCount,maxCount,res) => {
    if (Joi.date().validate(startDate).error) {
        res.json({ msg: "Please enter a valid start date,e.g., YYYY-MM-DD", code: 1 });
    } else if (Joi.date().validate(endDate).error) {
        res.json({ msg: "Please enter a valid end date,e.g., YYYY-MM-DD", code: 2 });
    } else if (Joi.number().validate(minCount).error) {
        res.json({ msg: "Please enter a valid number for minimum count", code: 3 });
    } else if (Joi.number().validate(maxCount).error) {
        res.json({ msg: "Please enter a valid number for maximum count", code: 4 });
    } 
}

module.exports = validateAPI;

