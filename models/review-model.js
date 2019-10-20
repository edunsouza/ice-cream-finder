class ReviewModel {

    constructor(id, text, usersName) {
        this.id = id || 0;
        this.text = text || "No Text";
        this.usersName = usersName || "No User's Name";
        Object.seal(this);
    }

}

module.exports = ReviewModel;