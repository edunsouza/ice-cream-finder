class ShopModel {

    constructor(id, name, address, rating, price, mainReview) {
        this.id = id || 0;
        this.name = name || "No Name";
        this.address = address || "No Address";
        this.city = city || "No City";
        this.mainReview = mainReview || "No Review";
        Object.seal(this);
    }

}

module.exports = ShopModel;