const router = require('express').Router();

const Homeless = require('../../data-models/homeless-model.js');
const authMiddleware = require('../../auth/auth-middleware.js');

router.get('/', (req, res) => {
    Homeless.find()
        .then(homeless => {
            res.status(200).json(homeless)
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to retrieve homeless'})
        })
})

router.post('/', (req, res) => {
    const homeless = req.body
    homeless.created = Date.now()
    Homeless.add(homeless)
        .then(createdHomeless => {
            res.status(200).json(createdHomeless)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    Homeless.findById(id)
        .then(homelessPerson => {
            if(homelessPerson){
                res.status(200).json(homelessPerson)
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

    Homeless.update(id, req.body)
        .then(updatedHomeless => {
            res.status(200).json(updatedHomeless)
        })
        .catch(error => {
            res.status(500).json({message: 'Could not update Homeless Person'})
        })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    Homeless.remove(id)
        .then(deletedHomeless => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(500).json({message: 'Could not update Homeless Person'})
        })
})

module.exports = router