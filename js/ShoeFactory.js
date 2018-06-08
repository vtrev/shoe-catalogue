var ShoeFactory = function () {

    //a shoe class to create new shoe objects.

    class shoe {
        constructor(brand, color, price, qty, size) {
            this.brand = brand;
            this.color = color;
            this.price = price;
            this.qty = qty;
            this.size = size;
        }
        reduce() {
            this.qty--;
            return this
        }
        gain() {
            this.qty++;
            return this

        }
    };
    //======================================End of class===========================================================//

    //shoesData array with shoe objects 

    var shoesData = [new shoe('nike', 'black', 500, 10, 5), new shoe('adidas', 'white', 250, 10, 5)];

    var addShoe = function (brand, color, price, qty, size) {
        shoesData.push(new shoe(brand, color, price, qty, size));
    };


    // match the specs and return the  shoe needed by the customer

    var getShoes = function (specs) {
        for (let i = 0; i < shoesData.length; i++) {
            let index = shoesData[i];
            if (index.brand == specs.brand) {
                if (index.size == specs.size) {
                    if (index.color == specs.color) {
                        return index

                    };
                };
            };
        };
    };

    //function for buying and returning items
    let doSales = function (action, specs) {

        let tmpShoe = getShoes(specs);
        if (action == 'buy') {
            return tmpShoe.reduce()
        }
        if (action == 'return') {
            return tmpShoe.gain();
        }
    }


    return {
        getShoes,
        doSales,
        addShoe
    }

};