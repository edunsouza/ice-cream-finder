class ShopModel {

    constructor(id, name, address, rating, price, mainReview) {
        this.id = id || 0;
        this.name = name || "No Name";
        this.address = address || "No Address";
        this.rating = rating || "No Rating";
        this.price = price || "No Price";
        this.mainReview = mainReview || "No Review";
        Object.seal(this);
    }

}

module.exports = ShopModel;