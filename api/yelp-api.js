const yelp = require('yelp-fusion');
const keys = require('../config/keys.json');
const Errors = require('../constants/errors');

const API_NAME = 'yelp';

function getYelpClient() {
    if (!keys.availableApi[API_NAME] || !keys.availableApi[API_NAME].apiKey) {
        throw Errors.NO_API_ERROR;
    }

    return yelp.client(keys.availableApi[API_NAME].apiKey);
}

function search(search) {
    return getYelpClient().search(search);
}

function getReviews(businessId) {
    return getYelpClient().reviews(businessId);
}

module.exports.apiName = API_NAME;
module.exports.search = search;
module.exports.getReviews = getReviews;