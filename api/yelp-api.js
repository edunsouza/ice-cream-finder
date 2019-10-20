const yelp = require('yelp-fusion');
const keys = require('../config/keys.json');

const Errors = require('../constants/errors');

const API_NAME = 'yelp';

function getYelpClient() {
    if (!keys.availableApi[API_NAME] || !keys.availableApi[API_NAME].apiKey) {
        throw Errors.NO_API_ERROR;
    }

    // return yelp.client(keys.availableApi[API_NAME].apiKey);


    // DEV MODE ONLY
    return {
        search: function (query) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve({
                        "total": 8228,
                        "businesses": [
                            {
                                "rating": 4.7,
                                "price": "$$",
                                "phone": "+14152520800",
                                "id": "E8RJkjfdcwgtyoPMjQ_Olg",
                                "alias": "four-barrel-coffee-san-francisco",
                                "is_closed": false,
                                "categories": [
                                    {
                                        "alias": "coffee",
                                        "title": "Coffee & Tea"
                                    }
                                ],
                                "review_count": 1738,
                                "name": "Cucas da vó",
                                "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                                "coordinates": {
                                    "latitude": 37.7670169511878,
                                    "longitude": -122.42184275
                                },
                                "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                                "location": {
                                    "city": "San Francisco",
                                    "country": "US",
                                    "address2": "",
                                    "address3": "",
                                    "state": "CA",
                                    "address1": "375 Valencia St",
                                    "zip_code": "94103"
                                },
                                "distance": 1604.23,
                                "transactions": ["pickup", "delivery"]
                            },
                            {
                                "rating": 5,
                                "price": "$",
                                "phone": "+14152520800",
                                "id": "E8RJkjfdcwgtyoPMjQ_Olg",
                                "alias": "four-barrel-coffee-san-francisco",
                                "is_closed": false,
                                "categories": [
                                    {
                                        "alias": "coffee",
                                        "title": "Coffee & Tea"
                                    }
                                ],
                                "review_count": 1738,
                                "name": "Bolos da tia",
                                "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                                "coordinates": {
                                    "latitude": 37.7670169511878,
                                    "longitude": -122.42184275
                                },
                                "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                                "location": {
                                    "city": "San Francisco",
                                    "country": "US",
                                    "address2": "",
                                    "address3": "",
                                    "state": "CA",
                                    "address1": "375 Valencia St",
                                    "zip_code": "94103"
                                },
                                "distance": 1604.23,
                                "transactions": ["pickup", "delivery"]
                            },
                            {
                                "rating": 4.6,
                                "price": "$",
                                "phone": "+14152520800",
                                "id": "E8RJkjfdcwgtyoPMjQ_Olg",
                                "alias": "four-barrel-coffee-san-francisco",
                                "is_closed": false,
                                "categories": [
                                    {
                                        "alias": "coffee",
                                        "title": "Coffee & Tea"
                                    }
                                ],
                                "review_count": 1738,
                                "name": "Four Barrel Coffee",
                                "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                                "coordinates": {
                                    "latitude": 37.7670169511878,
                                    "longitude": -122.42184275
                                },
                                "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                                "location": {
                                    "city": "San Francisco",
                                    "country": "US",
                                    "address2": "",
                                    "address3": "",
                                    "state": "CA",
                                    "address1": "375 Valencia St",
                                    "zip_code": "94103"
                                },
                                "distance": 1604.23,
                                "transactions": ["pickup", "delivery"]
                            },
                            {
                                "rating": 5,
                                "price": "$",
                                "phone": "+14152520800",
                                "id": "E8RJkjfdcwgtyoPMjQ_Olg",
                                "alias": "four-barrel-coffee-san-francisco",
                                "is_closed": false,
                                "categories": [
                                    {
                                        "alias": "coffee",
                                        "title": "Coffee & Tea"
                                    }
                                ],
                                "review_count": 1738,
                                "name": "Café do tio",
                                "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
                                "coordinates": {
                                    "latitude": 37.7670169511878,
                                    "longitude": -122.42184275
                                },
                                "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
                                "location": {
                                    "city": "San Francisco",
                                    "country": "US",
                                    "address2": "",
                                    "address3": "",
                                    "state": "CA",
                                    "address1": "375 Valencia St",
                                    "zip_code": "94103"
                                },
                                "distance": 1604.23,
                                "transactions": ["pickup", "delivery"]
                            },
                        ],
                        "region": {
                            "center": {
                                "latitude": 37.767413217936834,
                                "longitude": -122.42820739746094
                            }
                        }
                    });
                }, 2000);
            });
        },
        reviews: function (id) {
            return new Promise(function (resolve, reject) {
                setTimeout(resolve, 1000, {
                    "reviews": [
                        {
                            "id": "xAG4O7l-t1ubbwVAlPnDKg",
                            "rating": 5,
                            "user": {
                                "id": "W8UK02IDdRS2GL_66fuq6w",
                                "profile_url": "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
                                "image_url": "https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg",
                                "name": "Ella A."
                            },
                            "text": "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...",
                            "time_created": "2016-08-29 00:41:13",
                            "url": "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w"
                        },
                        {
                            "id": "1JNmYjJXr9ZbsfZUAgkeXQ",
                            "rating": 4,
                            "user": {
                                "id": "rk-MwIUejOj6LWFkBwZ98Q",
                                "profile_url": "https://www.yelp.com/user_details?userid=rk-MwIUejOj6LWFkBwZ98Q",
                                "image_url": null,
                                "name": "Yanni L."
                            },
                            "text": "The \"restaurant\" is inside a small deli so there is no sit down area. Just grab and go.\n\nInside, they sell individually packaged ingredients so that you can...",
                            "time_created": "2016-09-28 08:55:29",
                            "url": "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=fj87uymFDJbq0Cy5hXTHIA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w"
                        },
                        {
                            "id": "SIoiwwVRH6R2s2ipFfs4Ww",
                            "rating": 4,
                            "user": {
                                "id": "rpOyqD_893cqmDAtJLbdog",
                                "profile_url": "https://www.yelp.com/user_details?userid=rpOyqD_893cqmDAtJLbdog",
                                "image_url": null,
                                "name": "Suavecito M."
                            },
                            "text": "Dear Mission District,\n\nI miss you and your many delicious late night food establishments and vibrant atmosphere.  I miss the way you sound and smell on a...",
                            "time_created": "2016-08-10 07:56:44",
                            "url": "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=m_tnQox9jqWeIrU87sN-IQ&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w"
                        }
                    ],
                    "total": 3,
                    "possible_languages": ["en"]
                });
            });
        }
    };
}

function search(search) {
    getYelpClient().search(search);
}

function getReviews(businessId) {
    getYelpClient().reviews(businessId);
}

module.exports.apiName = API_NAME;
module.exports.search = search;
module.exports.getReviews = getReviews;