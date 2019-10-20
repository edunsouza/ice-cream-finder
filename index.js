const IceCreamService = require('./services/ice-cream-service');
const TopShopsView = require('./views/top-shops-view');

const SHOPS_LIST_SIZE = 5;
const SHOPS_LOCATION = 'Alpharetta, GA';
const SHOPS_LIST_TYPE = 'Ice Cream';

IceCreamService.findTopIceCreamShops(
    SHOPS_LOCATION,
    SHOPS_LIST_SIZE,
    TopShopsView.showTopShops.bind(this, SHOPS_LIST_TYPE),
    TopShopsView.showError
);

TopShopsView.showLoadingMessage();