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

module.exports = router