class articlesModel {
    set(array) {
        this.articlesArray = array;
    };

    get() {
        return this.articlesArray;
    };

    checkArticlesUniqueness(array) {
        if (array === this.articlesArray) {
            return false;
        } else {
            return true;
        }
    };
}

export default new articlesModel();