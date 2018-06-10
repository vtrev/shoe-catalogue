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

    var shoesData = [new shoe('Nike', 'Black', 500, 10, 10), new shoe('Adidas', 'White', 250, 10, 5), new shoe('Nike', 'White', 750, 8, 6), new shoe('Jordan', 'Pink', 999, 4, 6), new shoe('Adidas', 'Pink', 800, 15, 7)];

    var addShoe = function (shoeObject) {
        shoesData.push(new shoe(shoeObject.brand, shoeObject.color, shoeObject.price, shoeObject.qty, shoeObject.size));
    };


    // match the specs and return the  shoe needed by the customer
    var getShoes = function (specs) {

        var filteredShoes = shoesData.filter(function (shoe) {

            let objectIndex = Object.keys(specs);

            if (objectIndex.length == 1) {
                return shoe[objectIndex[0]] == specs[objectIndex[0]]
            }
            if (objectIndex.length == 2) {
                return shoe[objectIndex[0]] == specs[objectIndex[0]] && shoe[objectIndex[1]] == specs[objectIndex[1]]
            }
            if (objectIndex.length == 3) {
                return shoe[objectIndex[0]] == specs[objectIndex[0]] && shoe[objectIndex[1]] == specs[objectIndex[1]] && shoe[objectIndex[2]] == specs[objectIndex[2]]
            }

        });
        return filteredShoes;
    };

    //function for buying and returning items

    let doSales = function (specs) {
        let tmpShoe = getShoes(specs);

        var buyItem = function () {
            
            return tmpShoe[0].reduce()
        };

        var returnItem = function () {
            return tmpShoe[0].gain()
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
