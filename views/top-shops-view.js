const Errors = require('../constants/errors');

const LOADING_MESSAGE = "Loading the list...";
const LIST_NUMBER_PLACEHOLDER = "{0}"
const LIST_TYPE_PLACEHOLDER = "{1}"
const LIST_PLACEHOLDER = "{2}"
const SHOP_NAME_PLACEHOLDER = "{3}";
const SHOP_ADDRESS_PLACEHOLDER = "{4}";
const REVIEW_EXCERPT_PLACEHOLDER = "{5}";
const REVIER_AUTHOR_PLACEHOLDER = "{6}";

const SCREEN_TEMPLATE = `
    THE TOP ${LIST_NUMBER_PLACEHOLDER} ${LIST_TYPE_PLACEHOLDER} SHOPS ARE:

    ${LIST_PLACEHOLDER}
`;
const LIST_TEMPLATE = `
    ${SHOP_NAME_PLACEHOLDER}, ${SHOP_ADDRESS_PLACEHOLDER}

    "${REVIEW_EXCERPT_PLACEHOLDER}"

        - ${REVIER_AUTHOR_PLACEHOLDER}

`;

function createList(shops) {
    return shops.reduce((list, shop) => {
        return list.concat(
            LIST_TEMPLATE
                .replace(SHOP_NAME_PLACEHOLDER, shop.name)
                .replace(SHOP_ADDRESS_PLACEHOLDER, shop.address)
                .replace(REVIEW_EXCERPT_PLACEHOLDER, shop.mainReview.text)
                .replace(REVIER_AUTHOR_PLACEHOLDER, shop.mainReview.usersName)
        );
    }, new String());
}

function showLoadingMessage() {
    console.log(LOADING_MESSAGE);
}

function showTopShops(listType, shopsModel) {
    listType = listType || "BEST";

    console.log(
        SCREEN_TEMPLATE
            .replace(LIST_NUMBER_PLACEHOLDER, shopsModel.length)
            .replace(LIST_TYPE_PLACEHOLDER, listType.toUpperCase())
            .replace(LIST_PLACEHOLDER, createList(shopsModel))
    );
}

function showError(error) {
    console.log(Errors.FAILED_TO_LOAD_LIST);
    console.log(error);
}

module.exports.showLoadingMessage = showLoadingMessage;
module.exports.showTopShops = showTopShops;
module.exports.showError = showError;