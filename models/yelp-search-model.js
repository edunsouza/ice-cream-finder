class YelpSearchModel {

    constructor(term, categories, location, limit, sortBy) {
        this.term = term || 'icecream',
        this.categories = categories || 'icecream',
        this.location = location || "",
        this.limit = limit || 5,
        this.sort_by = sortBy || 'rating',
        Object.seal(this);
    }

}

module.exports = YelpSearchModel;