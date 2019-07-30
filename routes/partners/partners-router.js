const router = require('express').Router();

const Partners = require('../../data-models/partners-model.js');

router.get('/', async (req, res) => {
    Partners.find()
        .then(partners => {
            res.status(200).json(partners)
        })
        .catch(error => {
            res.status(500).json({message: 'Could not get Partners'})
        })
})

module.exports = router