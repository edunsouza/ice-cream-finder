const IceCreamService = require('./api/yelp-api');
const TopShopsView = require('./views/top-shops-view');

const SHOPS_LIST_SIZE = 5;
const SHOPS_LOCATION = 'Alpharetta, GA';

IceCreamService.findTopIceCreamShops(SHOPS_LOCATION, SHOPS_LIST_SIZE, showList, showError);
// TopShopsView.showTopShopsDescription

console.log("Loading the list of the best ice creams in Alpharetta...");