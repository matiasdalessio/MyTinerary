# MyTinerary

Obtain and modify Cities, one specific City, Itineraries, one specific Itinerary or all the available Itineraries in one City.

## Endpoints
URL: https://192.168.0.147:4000/

| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /api/cities | Get all Cities |
| GET | /api/city/:id | Get single City replacing ":id" with the ID of the City|
| GET | /api/city/itineraries/:id | Get all available Itineraries in a single City replacing ":id" with the ID of the City |
| GET | /api/itineraries | Get all available Itineraries populated with the City and it's information |
| GET | /api/itinerary/:id | Get a single Itinerary populated with the City and it's information replacing ":id" with the ID of the Itinerary|
| POST | /api/cities | Add one City with the required fields  < ***see required fields and format at the end of table*** > |
| POST | /api/itineraries |  Add one Itinerary with the required fields  <***see required fields and format at the end of table***> |
| DELETE | /api/city/:id | Delete one City replacing ":id" with the ID of the City|
| DELETE | /api/itinerary/:id | Delete one Itinerary replacing ":id" with the ID of the Itinerary |
| PUT | /api/city/:id | Modify one City replacing ":id" with the ID of the City and sending the field with the information to change  <***see required fields and format at the end of table***>  |
| PUT | /api/itinerary/:id | Modify one Itinerary replacing ":id" with the ID of the Itinerary and sending the field with the information to change  <***see required fields and format at the end of table***> |


## Responses

_Every GET request, response with a JSON object with two properties: the state of the request and the response with the data required. for example:_

### Requesting all Cities (/api/cities) :

```javascript
{
  "success": true,
  "respuesta": [
    {
      "_id": "607a2f28745e5322941e0016",
      "name": "Baku",
      "country": "Azerbaijan",
      "img": "Baku.jpg",
      "info": "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!",
      "__v": 0
    },
    ...
 ```

### Requesting one single City (/api/city/607a2f28745e5322941e0016) :

```javascript
{
  "success": true,
  "respuesta": {
    "_id": "607a2f28745e5322941e0016",
    "name": "Baku",
    "country": "Azerbaijan",
    "img": "Baku.jpg",
    "info": "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!",
    "__v": 0
  }
}
```

### Requesting all available Itineraries in a single City (/api/city/itineraries/6081cbacb3e2822148f6b6e6) :

```javascript
{
  "success": true,
  "respuesta": [
    {
      "author": {
        "userName": "Athan Travis",
        "imageURL": "https://images.generated.photos/rQ3NjmDfVvwNFBNJFGBq5U1lc3nWWywi7v8gKzSv7KQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/NjExNjQuanBn.jpg"
      },
      "like": 0,
      "hashtags": [
        "#Health",
        "#Beauty",
        "#Nature",
        "#FunTrip!"
      ],
      "comments": [],
      "usersLiked": [],
      "_id": "6081cbacb3e2822148f6b6e6",
      "itineraryName": "Mountain Trip",
      "price": 2,
      "duration": 5,
      "cityID": "607a2f28745e5322941e0016",
      "__v": 0
    },
    {
      "author": {
        "userName": "Jhon Waititi",
        "imageURL": "https://uifaces.co/our-content/donated/VxDQx_gA.jpg"
      },
      "like": 0,
      "hashtags": [
        "#Ocean",
        "#Boats",
        "#BlurredSkyline",
        "#NightLife"
      ],
      "comments": [],
      "usersLiked": [],
      "_id": "60821e325c72a216fce09629",
      "itineraryName": "Night walk through the City",
      "price": 3,
      "duration": 3,
      "cityID": "607a2f28745e5322941e0016",
      "__v": 0
    }
  ]
}
```
### Requesting all the available Itineraries (/api/itineraries) :

```javascript
{
  "success": true,
  "respuesta": [
    {
      "author": {
        "userName": "Athan Travis",
        "imageURL": "https://images.generated.photos/rQ3NjmDfVvwNFBNJFGBq5U1lc3nWWywi7v8gKzSv7KQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/NjExNjQuanBn.jpg"
      },
      "like": 0,
      "hashtags": [
        "#Health",
        "#Beauty",
        "#Nature",
        "#FunTrip!"
      ],
      "comments": [],
      "usersLiked": [],
      "_id": "6081cbacb3e2822148f6b6e6",
      "itineraryName": "Mountain Trip",
      "price": 2,
      "duration": 5,
      "cityID": {
        "_id": "607a2f28745e5322941e0016",
        "name": "Baku",
        "country": "Azerbaijan",
        "img": "Baku.jpg",
        "info": "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!",
        "__v": 0
      },
      "__v": 0
    },
    ...
  }
```

### Requesting one single Itinerary (/api/itinerary/6081cbacb3e2822148f6b6e6) :

```javascript
{
  "success": true,
  "respuesta": {
    "author": {
      "userName": "Athan Travis",
      "imageURL": "https://images.generated.photos/rQ3NjmDfVvwNFBNJFGBq5U1lc3nWWywi7v8gKzSv7KQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAy/NjExNjQuanBn.jpg"
    },
    "like": 0,
    "hashtags": [
      "#Health",
      "#Beauty",
      "#Nature",
      "#FunTrip!"
    ],
    "comments": [],
    "usersLiked": [],
    "_id": "6081cbacb3e2822148f6b6e6",
    "itineraryName": "Mountain Trip",
    "price": 2,
    "duration": 5,
    "cityID": {
      "_id": "607a2f28745e5322941e0016",
      "name": "Baku",
      "country": "Azerbaijan",
      "img": "Baku.jpg",
      "info": "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!",
      "__v": 0
    },
    "__v": 0
  }
}
```

_Every PUT, POST and DELETE request, response with a JSON object with two properties: the state of the request and the response with the object added, modified o deleted. for example:_

### POST a City (/api/cities) :

```javascript
{
  "success": true,
  "respuesta": {
    "_id": "60837a4da486990ba81ddea4",
    "name": "Baku",
    "country": "Azerbaijan",
    "img": "Baku.jpg",
    "info": "Capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and of the Caucasus region. Baku is located 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level. Click here to see all the possible Itineraries!",
    "__v": 0
  }
}
```

### POST an Itinerary (/api/itineraries) :

```javascript
{
  "success": true,
  "respuesta": {
    "like": 0,
    "hashtags": [
      "#Snow",
      "#Winter",
      "#Sledders",
      "#SuperFun!"
    ],
    "comments": [],
    "usersLiked": [],
    "_id": "6083784da486990ba81ddea1",
    "itineraryName": "Mountain Sled on Piedras Blancas!",
    "author": {
      "userName": "Paula Ruiz",
      "imageURL": "https://uifaces.co/our-content/donated/oedmUmVc.jpg"
    },
    "price": 3,
    "duration": 2,
    "cityID": "607a2f2c745e5322941e0017",
    "__v": 0
  }
}
```

### DELETE a City and update a City with PUT (/api/city/60837a4da486990ba81ddea4) :

```javascript
{
  "success": true,
  "respuesta": {
    "_id": "60837a4da486990ba81ddea4",
    "name": "test",
    "country": "test",
    "img": "test.jpg",
    "info": "test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text",
    "__v": 0
  }
}
```

### DELETE an Itinerary and update an Itinerary with PUT(/api/itinerary/6083784da486990ba81ddea1) :

```javascript
{
  "success": true,
  "respuesta": {
    "author": {
      "userName": "post test",
      "imageURL": "https://www.testimage.jpg"
    },
    "like": 0,
    "hashtags": [
      "#test",
      "#test",
      "#test",
      "#test!"
    ],
    "comments": [],
    "usersLiked": [],
    "_id": "6083784da486990ba81ddea1",
    "itineraryName": "test title",
    "price": 1,
    "duration": 5,
    "cityID": "607a2f2c745e5322941e0017",
    "__v": 0
  }
}
```

## Required fields and format to POST request:

### For Cities:

| Field | Format | Specificity | Required |
| ------ | ------ | ------ | ------ |
| name | String | ------  | Required |
| country | String | ------ | Required |
| img | String | ------  | Required |
| info | String | ------  | Required |

### For Itineraries:

| Field | Format | Specificity | Required |
| ------ | ------ | ------ | ------ |
| itineraryName | String | ------  | Required |
| author | array of objects with String format | 2 Properties: userName and imageURL in String format. | Required |
| price | Number | Value between 1 and 5.  | Required |
| duration | Number | Value between 1 and 5 . | Required |
| like | String | ------ | ------ |
| hashtags | array of objects with String format| At least 3 and max 5 Hashtags, separated with a "," .  | Required |
| cityID | String | Must be a existent City ID. if you don't know it, send a GET request to obtain it. | Required |



_ If you find issues or BUGS, please contact us at matidaless@gmail.com._


