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

    var shoesData = [new shoe('nike', 'black', 500, 10, 10), new shoe('adidas', 'white', 250, 10, 5)];

    var addShoe = function (shoeObject) {
        shoesData.push(new shoe(shoeObject.brand, shoeObject.color, shoeObject.price, shoeObject.qty, shoeObject.size));
    };


    // match the specs and return the  shoe needed by the customer
    var clearObject = function (object) {
        this.brand = null;
        this.size = null;
        this.color = null;
    };
    var getShoes = function (specs) {
        let holdingObject = {};
        clearObject(holdingObject);
        let holdingArray = [];
        for (let i = 0; i < shoesData.length; i++) {
            let dataIndex = shoesData[i];
            let specsIndex = Object.keys(specs)[i];
            if (specs.brand) {
                if (specs.brand == dataIndex.brand) {
                    holdingObject['brand'] = specs.brand;
                };
            };
            if (specs.color) {
                if (specs.color == dataIndex.color) {
                    holdingObject['color'] = specs.color;
                };
            };

            if (specs.size) {
                if (specs.size == dataIndex.size) {
                    holdingObject['size'] = specs.size;
                };
            };
            if (holdingObject[specsIndex] == dataIndex[specsIndex]) {
                holdingArray.push(dataIndex);
            }

        };

        for (let i = 0; i < shoesData.length; i++) {



        }



        console.log(holdingArray);
    };

    //function for buying and returning items
    let doSales = function (specs) {
        let tmpShoe = getShoes(specs);

        var buyItem = function () {
            return tmpShoe.reduce()
        };

        var returnItem = function () {
            return tmpShoe.gain()
        };
        return {
            buyItem,
            returnItem
        }
    }



    return {
        getShoes,
        doSales,
        addShoe
    }

};