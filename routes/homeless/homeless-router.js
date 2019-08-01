const router = require('express').Router();

const Homeless = require('../../data-models/homeless-model.js');
const authMiddleware = require('../../auth/auth-middleware.js');

/**
 * @api {get} /api/homeless GET /api/homeless
 * @apiVersion 1.0.0
 * @apiName Get Homeless
 * @apiGroup Homeless
 *
 * @apiExample Request
 * axios.get('/api/homeless');
 * 
 * @apiHeader {string} token Token returned from login passed in as req.headers.authorization
 * 
 * @apiSuccess {number} id            Homeless ID
 * @apiSuccess {string} firstName      Homeless First Name
 * @apiSuccess {string} lastName       Homeless Last Name
 * @apiSuccess {float} [longitude]  Homeless Longitude 
 * @apiSuccess {float} [latitude]   Homeless Latitude 

 * @apiSuccessExample {json} Response
 *  [
        {
            "id": 14,
            "firstName": "McClure",
            "lastName": "Daley",
            "longitude": -121.806,
            "latitude": 38.0049
        },
        {
            "id": 15,
            "firstName": "Edmondson",
            "lastName": "Africa",
            "longitude": -122.198,
            "latitude": 37.4613
        }
    ]
*
*
*/

router.get('/', authMiddleware, (req, res) => {
    Homeless.find()
        .then(homeless => {
            res.status(200).json(homeless)
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to retrieve homeless'})
        })
})

/**
 * @api {post} /api/homeless POST /api/homeless
 * @apiVersion 1.0.0
 * @apiName Register Homeless
 * @apiGroup Homeless
 * 
 * @apiExample Request
 * axios.post('/api/homeless', newHomelessPerson);
 * 
 * @apiParam {string} firstName   Mandatory First Name 
 * @apiParam {string} lastName      Mandatory Last Name
 * @apiParam {string} [city]      Optional city 
 * @apiParam {string} [state]     Optional state
 * @apiParam {string} [zip]     Optional zip code
 * @apiParam {string} [country]   Optional country 
 * @apiParam {float} [longitude]  Optional longitude 
 * @apiParam {float} [latitude]   Optional latitude 
 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} firstName       First Name
 * @apiSuccess {string} lastName     Last Name
 * @apiSuccess {string} [city]       City 
 * @apiSuccess {string} [state]      State
 * @apiSuccess {string} [zip]     Zip code
 * @apiSuccess {string} [country]    Country
 * @apiSuccess {bigInteger} [created] Timestamp for creation of record 
 * @apiSuccess {float} [longitude]   Longitude 
 * @apiSuccess {float} [latitude]    Latitude 
 * 
 * @apiSuccessExample {json} Response
*   {
        "id": 2,
        "firstName": "Joel",
        "lastName": "Perez",
        "city": "Lafayette",
        "state": "CO",
        "zip": null,
        "country": "United States of America",
        "created": 1564524174115,
        "longitude": -105.097455,
        "latitude": 39.994962
    } 
*/

router.post('/', (req, res) => {
    const homeless = req.body
    homeless.zip = parseInt(homeless.zip)
    homeless.created = Date.now()
    Homeless.add(homeless)
        .then(createdHomeless => {
            res.status(200).json(createdHomeless)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

/**
 * @api {get} /api/homeless/:id GET /api/homeless/:id
 * @apiVersion 1.0.0
 * @apiName Get Homeless by id
 * @apiGroup Homeless
 *
 * @apiExample Request
 * axios.get('/api/homeless/:id');
 * 
 * @apiHeader {string} token Token returned from login passed in as req.headers.authorization
 * 
 * @apiParam {id} id                User Id (comes from URL)
 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} firstName       First Name
 * @apiSuccess {string} lastName     Last Name
 * @apiSuccess {string} [city]       City 
 * @apiSuccess {string} [state]      State
 * @apiSuccess {string} [zip]     Zip code
 * @apiSuccess {string} [country]    Country
 * @apiSuccess {bigInteger} [created] Timestamp for creation of record 
 * @apiSuccess {float} [longitude]   Longitude 
 * @apiSuccess {float} [latitude]    Latitude 
 * 
 * @apiSuccessExample {json} Response
*   {
        "id": 2,
        "firstName": "Joel",
        "lastName": "Perez",
        "city": "Lafayette",
        "state": "CO",
        "zip": null,
        "country": "United States of America",
        "created": 1564524174115,
        "longitude": -105.097455,
        "latitude": 39.994962
    } 
*
*
*/

router.get('/:id', authMiddleware, (req, res) => {
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

/**
 * @api {put} /api/homeless/:id PUT /api/homeless/:id
 * @apiVersion 1.0.0
 * @apiName Edit Homeless by id
 * @apiGroup Homeless
 *
 * @apiExample Request
 * axios.put('/api/homeless/:id', updatedHomeless);
 * 
 * @apiParam {id} id                Required User Id (comes from URL)
 * @apiParam {string} [name]      Optional updated Homeless Name
 * @apiParam {string} [email]       Optional updated Homeless Email
 * @apiParam {string} [city]      Optional updated Homeless City 
 * @apiParam {string} [state]     Optional updated Homeless State 
 * @apiParam {string} [country]   Optional updated Homeless Country 
 * @apiParam {float} [longitude]  Optional updated Homeless Longitude 
 * @apiParam {float} [latitude]   Optional updated Homeless Latitude 
 * 
 * @apiSuccess {number} id Partner ID
 * @apiSuccess {string} firstName    First Name
 * @apiSuccess {string} lastName     Last Name
 * @apiSuccess {string} [city]       City 
 * @apiSuccess {string} [state]      State
 * @apiSuccess {string} [zip]     Zip code
 * @apiSuccess {string} [country]    Country
 * @apiSuccess {bigInteger} [created] Timestamp for creation of record 
 * @apiSuccess {float} [longitude]   Longitude 
 * @apiSuccess {float} [latitude]    Latitude 
 
 * @apiSuccessExample {json} Response
*   {
        "id": 2,
        "firstName": "Joel",
        "lastName": "Perez",
        "city": "Lafayette",
        "state": "CO",
        "zip": null,
        "country": "United States of America",
        "created": 1564524174115,
        "longitude": -105.097455,
        "latitude": 39.994962
    } *
*
*/

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

/**
 * @api {delete} /api/homeless/:id DELETE /api/homeless/:id
 * @apiVersion 1.0.0
 * @apiName Delete Homeless by id
 * @apiGroup Homeless
 *
 * @apiExample Request
 * axios.delete('/api/homeless/:id');
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

    Homeless.remove(id)
        .then(deletedHomeless => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(500).json({message: 'Could not delete Homeless Person'})
        })
})

module.exports = router