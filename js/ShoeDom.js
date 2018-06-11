//a shoe class to create new shoe objects.

class shoe {

    constructor(brand, color, price, qty, size) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.qty = qty;
        this.size = size;
    }

};


let shoesArray = [new shoe('Nike', 'Black', 500, 10, 10), new shoe('Adidas', 'White', 250, 10, 5), new shoe('Nike', 'White', 750, 8, 6), new shoe('Jordan', 'Pink', 999, 4, 6), new shoe('Adidas', 'Pink', 800, 15, 7)];

shoes = ShoeFactory(shoesArray);
console.log(shoes.getShoes({
    brand: 'Nike'
}));