const router = require('express').Router();

const Partners = require('../../data-models/partners-model.js');

/**
 * @api {get} /api/partners GET /api/partners
 * @apiVersion 1.0.0
 * @apiName Get Partners
 * @apiGroup Partners
 *
 * @apiExample Request
 * axios.get('/api/partners');
 * 
 * @apiSuccess {number} id            Partner ID
 * @apiSuccess {string} [name]      Partner Name
 * @apiSuccess {string} email       Partner Email (required, must be unique)
 * @apiSuccess {float} [longitude]  Partner Longitude 
 * @apiSuccess {float} [latitude]   Partner Latitude 

 * @apiSuccessExample {json} Response
 *  [
 *     {
            "id": 1,
            "name": "Nicole Zaborsky",
            "email": "nicolezaborsky@charter.net",
            "longitude": -119.9843482,
            "latitude": 38.9332411
       },
       {
            "id": 2,
            "name": "Jill Baker",
            "email": "jlbaker@nnva.gov",
            "longitude": -76.4321089,
            "latitude": 36.9786449
        }
    ]
*
*
*/

router.get('/', (req, res) => {
    Partners.find()
        .then(partners => {
            res.status(200).json(partners)
        })
        .catch(error => {
            res.status(500).json({message: 'Could not get Partners'})
        })
})

/**
 * @api {get} /api/partners/:id GET /api/partners/:id
 * @apiVersion 1.0.0
 * @apiName Get Partners by id
 * @apiGroup Partners
 *
 * @apiExample Request
 * axios.get('/api/partners/:id');
 * 
 * @apiParam {id} id                User Id (comes from URL)
 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} [name]      Partner Name
 * @apiSuccess {string} email       Partner Email
 * @apiSuccess {string} [city]      Partner City 
 * @apiSuccess {string} [state]     Partner State 
 * @apiSuccess {string} [country]   Partner Country 
 * @apiSuccess {float} [longitude]  Partner Longitude 
 * @apiSuccess {float} [latitude]   Partner Latitude 
 * @apiSuccess {string} password    Hashed Password 

 * @apiSuccessExample {json} Response
  * {
    "id": 447,
    "name": "Joels food bank",
    "email": "yeahright@noway.com",
    "city": "Denver",
    "state": "CO",
    "country": "USA",
    "longitude": -104.988415,
    "latitude": 39.749885,
    "password": "$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi"
  }
*
*
*/

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

/**
 * @api {put} /api/partners/:id PUT /api/partners/:id
 * @apiVersion 1.0.0
 * @apiName Edit Partner by id
 * @apiGroup Partners
 *
 * @apiExample Request
 * axios.put('/api/partners/:id', updatedPartner);
 * 
 * @apiParam {id} id                Required User Id (comes from URL)
 * @apiParam {string} [name]      Optional updated Partner Name
 * @apiParam {string} [email]       Optional updated Partner Email
 * @apiParam {string} [city]      Optional updated Partner City 
 * @apiParam {string} [state]     Optional updated Partner State 
 * @apiParam {string} [country]   Optional updated Partner Country 
 * @apiParam {float} [longitude]  Optional updated Partner Longitude 
 * @apiParam {float} [latitude]   Optional updated Partner Latitude 

 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} [name]      Partner Name
 * @apiSuccess {string} email       Partner Email
 * @apiSuccess {string} [city]      Partner City 
 * @apiSuccess {string} [state]     Partner State 
 * @apiSuccess {string} [country]   Partner Country 
 * @apiSuccess {float} [longitude]  Partner Longitude 
 * @apiSuccess {float} [latitude]   Partner Latitude 
 * @apiSuccess {string} password    Hashed Password 
 
 * @apiSuccessExample {json} Response
 * {
    "id": 447,
    "name": "Joels food bank",
    "email": "yeahright@noway.com",
    "city": "Denver",
    "state": "CO",
    "country": "USA",
    "longitude": -104.988415,
    "latitude": 39.749885,
    "password": "$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi"
}
*
*
*/

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

/**
 * @api {delete} /api/partners/:id DELETE /api/partners/:id
 * @apiVersion 1.0.0
 * @apiName Delete Partner by id
 * @apiGroup Partners
 *
 * @apiExample Request
 * axios.delete('/api/partners/:id');
 * 
 * @apiParam {id} id                User Id (comes from URL)
 * 
 * @apiSuccessExample {json} Response
  HTTP/1.1 204 No Content
*
*
*/

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