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

router.put('/:id', (req, res) => {
    const {id} = req.params

    Partners.update(id, req.body)
        .then(partner => {
            res.status(200).json(partner)
        })
        .catch(error => {
            res.status(500).json({message: 'Could not update Partner'})
        })
})

module.exports = router