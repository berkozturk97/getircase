var express = require('express');
var router = express.Router();

const Item = require('../models/Item');

router.post('/addUser', (req, res) => {
    const { fullName, email, password, permissions } = req.body;
    const item = new Item({
        fullName,
        email,
        password,
        permissions
    })
    item.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})



router.get('/get', (req, res) => {
    Item.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err)
    })
})


module.exports = router;