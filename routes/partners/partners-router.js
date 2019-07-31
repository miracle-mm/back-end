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

router.get('/:id', (req, res) => {
    const {id} = req.params

    Partners.findById(id)
        .then(partner => {
            if(partner){
                res.status(200).json(partner)
            } else {
                res.status(404).json({ message: "That person does not exist"})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to retrieve homeless person'})
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params

    Partners.update(id, req.body)
        .then(updatedPartner => {
            res.status(200).json(updatedPartner)
        })
        .catch(error => {
            res.status(500).json({message: 'Could not update Partner'})
        })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    Partners.remove(id)
        .then(deletedPartner => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(500).json({message: 'Could not delete Partner'})
        })
})

module.exports = router