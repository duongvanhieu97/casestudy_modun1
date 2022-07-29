class Products {
    name;
    price;
    category;
    image;

    constructor(name, price, category, image) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image
    };

    getName() {
        return this.name
    };

    getPrice() {
        return this.price
    };

    getCategory() {
        return this.category
    };
    getImage() {
        return this.image
    };


    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setImage(image) {
        this.image = image;
    }

    setCategory(category) {
        this.category = category;
    }
}