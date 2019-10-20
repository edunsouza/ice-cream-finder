const YelpApi = require('../api/yelp-api');
const keys = require('../config/keys.json');
const Errors = require('../constants/errors');

const YelpSearchModel = require('../models/yelp-search-model');
const ShopModel = require('../models/shop-model');
const ReviewModel = require('../models/review-model');

const TERM_ICE_CREAM = 'icecream';
const CATEGORY_ICE_CREAM = 'icecream';

function getMainApi() {
    if (keys.mainApi == YelpApi.apiName) {
        return YelpApi;
    }

    throw Errors.NO_API_ERROR;
}

function getSearchModel(term, category, location, listSize) {
    if (keys.mainApi == YelpApi.apiName) {
        return new YelpSearchModel(term, category, location, listSize);
    }

    throw Errors.NO_API_ERROR;
}

function createShopModels(shops, shopReviews) {
    return shops.map((shop, index) => {
        const review = shopReviews[index].jsonBody.reviews[0];

        return new ShopModel(
            shop.id,
            shop.name,
            shop.location.address1,
            shop.rating,
            shop.price,
            new ReviewModel(
                review.id,
                review.text,
                review.user.name
            )
        );
    });
}

function getShopReviews(shops, onSuccess, onFail) {
    const promises = shops.jsonBody.businesses.map(shop => getMainApi().getReviews(shop.id));

    Promise
        .all(promises)
        .then(reviews => onSuccess(createShopModels(shops.jsonBody.businesses, reviews)))
        .catch(onFail);
}

function findTopIceCreamShops(location, listSize, onSuccess, onFail) {
    const search = getSearchModel(TERM_ICE_CREAM, CATEGORY_ICE_CREAM, location, listSize);

    getMainApi()
        .search(search)
        .then(searchResult => getShopReviews(searchResult, onSuccess, onFail))
        .catch(onFail);
}

module.exports.findTopIceCreamShops = findTopIceCreamShops;