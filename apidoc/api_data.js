define({ "api": [
  {
    "type": "delete",
    "url": "/api/homeless/:id",
    "title": "DELETE /api/homeless/:id",
    "version": "1.0.0",
    "name": "Delete_Homeless_by_id",
    "group": "Homeless",
    "examples": [
      {
        "title": "Request",
        "content": "axios.delete('/api/homeless/:id');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User Id (comes from URL)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "routes/homeless/homeless-router.js",
    "groupTitle": "Homeless",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/homeless/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/homeless/:id",
    "title": "PUT /api/homeless/:id",
    "version": "1.0.0",
    "name": "Edit_Homeless_by_id",
    "group": "Homeless",
    "examples": [
      {
        "title": "Request",
        "content": "axios.put('/api/homeless/:id', updatedHomeless);",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Required User Id (comes from URL)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Optional updated Homeless Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Optional updated Homeless Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Optional updated Homeless City</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Optional updated Homeless State</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Optional updated Homeless Country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Optional updated Homeless Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Optional updated Homeless Latitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "bigInteger",
            "optional": true,
            "field": "created",
            "description": "<p>Timestamp for creation of record</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n      \"id\": 2,\n      \"firstName\": \"Joel\",\n      \"lastName\": \"Perez\",\n      \"city\": \"Lafayette\",\n      \"state\": \"CO\",\n      \"zip\": null,\n      \"country\": \"United States of America\",\n      \"created\": 1564524174115,\n      \"longitude\": -105.097455,\n      \"latitude\": 39.994962\n  } *",
          "type": "json"
        }
      ]
    },
    "filename": "routes/homeless/homeless-router.js",
    "groupTitle": "Homeless",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/homeless/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/homeless",
    "title": "GET /api/homeless",
    "version": "1.0.0",
    "name": "Get_Homeless",
    "group": "Homeless",
    "examples": [
      {
        "title": "Request",
        "content": "axios.get('/api/homeless');",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned from login passed in as req.headers.authorization</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Homeless ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>Homeless First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Homeless Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Homeless Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Homeless Latitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n       {\n           \"id\": 14,\n           \"firstName\": \"McClure\",\n           \"lastName\": \"Daley\",\n           \"longitude\": -121.806,\n           \"latitude\": 38.0049\n       },\n       {\n           \"id\": 15,\n           \"firstName\": \"Edmondson\",\n           \"lastName\": \"Africa\",\n           \"longitude\": -122.198,\n           \"latitude\": 37.4613\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/homeless/homeless-router.js",
    "groupTitle": "Homeless",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/homeless"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/homeless/:id",
    "title": "GET /api/homeless/:id",
    "version": "1.0.0",
    "name": "Get_Homeless_by_id",
    "group": "Homeless",
    "examples": [
      {
        "title": "Request",
        "content": "axios.get('/api/homeless/:id');",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token returned from login passed in as req.headers.authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User Id (comes from URL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "bigInteger",
            "optional": true,
            "field": "created",
            "description": "<p>Timestamp for creation of record</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n      \"id\": 2,\n      \"firstName\": \"Joel\",\n      \"lastName\": \"Perez\",\n      \"city\": \"Lafayette\",\n      \"state\": \"CO\",\n      \"zip\": null,\n      \"country\": \"United States of America\",\n      \"created\": 1564524174115,\n      \"longitude\": -105.097455,\n      \"latitude\": 39.994962\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/homeless/homeless-router.js",
    "groupTitle": "Homeless",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/homeless/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/homeless",
    "title": "POST /api/homeless",
    "version": "1.0.0",
    "name": "Register_Homeless",
    "group": "Homeless",
    "examples": [
      {
        "title": "Request",
        "content": "axios.post('/api/homeless', newHomelessPerson);",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>Mandatory First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Mandatory Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Optional city</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Optional state</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Optional zip code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Optional country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Optional longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Optional latitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "bigInteger",
            "optional": true,
            "field": "created",
            "description": "<p>Timestamp for creation of record</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n      \"id\": 2,\n      \"firstName\": \"Joel\",\n      \"lastName\": \"Perez\",\n      \"city\": \"Lafayette\",\n      \"state\": \"CO\",\n      \"zip\": null,\n      \"country\": \"United States of America\",\n      \"created\": 1564524174115,\n      \"longitude\": -105.097455,\n      \"latitude\": 39.994962\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/homeless/homeless-router.js",
    "groupTitle": "Homeless",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/homeless"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/partners/:id",
    "title": "DELETE /api/partners/:id",
    "version": "1.0.0",
    "name": "Delete_Partner_by_id",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.delete('/api/partners/:id');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User Id (comes from URL)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "routes/partners/partners-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/partners/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/partners/:id",
    "title": "PUT /api/partners/:id",
    "version": "1.0.0",
    "name": "Edit_Partner_by_id",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.put('/api/partners/:id', updatedPartner);",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Required User Id (comes from URL)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Optional updated Partner Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Optional updated Partner Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Optional updated Partner City</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Optional updated Partner State</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Optional updated Partner Country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Optional updated Partner Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Optional updated Partner Latitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Partner Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Partner Email</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Partner City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Partner State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Partner Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Partner Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Partner Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 447,\n    \"name\": \"Joels food bank\",\n    \"email\": \"yeahright@noway.com\",\n    \"city\": \"Denver\",\n    \"state\": \"CO\",\n    \"country\": \"USA\",\n    \"longitude\": -104.988415,\n    \"latitude\": 39.749885,\n    \"password\": \"$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/partners/partners-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/partners/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/partners",
    "title": "GET /api/partners",
    "version": "1.0.0",
    "name": "Get_Partners",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.get('/api/partners');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Partner Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Partner Email (required, must be unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Partner Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Partner Latitude</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n   {\n           \"id\": 1,\n           \"name\": \"Nicole Zaborsky\",\n           \"email\": \"nicolezaborsky@charter.net\",\n           \"longitude\": -119.9843482,\n           \"latitude\": 38.9332411\n      },\n      {\n           \"id\": 2,\n           \"name\": \"Jill Baker\",\n           \"email\": \"jlbaker@nnva.gov\",\n           \"longitude\": -76.4321089,\n           \"latitude\": 36.9786449\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/partners/partners-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/partners"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/partners/:id",
    "title": "GET /api/partners/:id",
    "version": "1.0.0",
    "name": "Get_Partners_by_id",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.get('/api/partners/:id');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User Id (comes from URL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Partner Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Partner Email</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Partner City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Partner State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Partner Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Partner Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Partner Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 447,\n    \"name\": \"Joels food bank\",\n    \"email\": \"yeahright@noway.com\",\n    \"city\": \"Denver\",\n    \"state\": \"CO\",\n    \"country\": \"USA\",\n    \"longitude\": -104.988415,\n    \"latitude\": 39.749885,\n    \"password\": \"$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/partners/partners-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/partners/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "POST /api/auth/login",
    "version": "1.0.0",
    "name": "Login_Partner",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.post('/api/auth/login');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>Welcome Partner Email</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token given for login validation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 447,\n    \"name\": \"Joels food bank\",\n    \"email\": \"yeahright@noway.com\",\n    \"city\": \"Denver\",\n    \"state\": \"CO\",\n    \"country\": \"USA\",\n    \"longitude\": -104.988415,\n    \"latitude\": 39.749885,\n    \"password\": \"$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth/auth-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "POST /api/auth/register",
    "version": "1.0.0",
    "name": "Register_Partner",
    "group": "Partners",
    "examples": [
      {
        "title": "Request",
        "content": "axios.post('/api/auth/register');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Optional name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Optional city</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Optional state</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Optional country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Optional longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Optional latitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Partner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Partner Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Partner Email</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Partner City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>Partner State</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Partner Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "longitude",
            "description": "<p>Partner Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": true,
            "field": "latitude",
            "description": "<p>Partner Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"id\": 447,\n    \"name\": \"Joels food bank\",\n    \"email\": \"yeahright@noway.com\",\n    \"city\": \"Denver\",\n    \"state\": \"CO\",\n    \"country\": \"USA\",\n    \"longitude\": -104.988415,\n    \"latitude\": 39.749885,\n    \"password\": \"$2a$10$l1AbQFAGX.CZOEQm1RgaP.qVstDpteUXm2XuqhT9q280KMnQDQYxi\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth/auth-router.js",
    "groupTitle": "Partners",
    "sampleRequest": [
      {
        "url": "https://miracle-messages-map.herokuapp.com/api/auth/register"
      }
    ]
  }
] });
