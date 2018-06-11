var ShoeFactory = function (shoesData) {

    let storeShoes = function (shoesToStore) {
        localStorage.setItem('shoesData', JSON.stringify(shoesToStore));
    };

    let getStoredShoes = function () {
        return JSON.parse(localStorage.getItem('shoesData'));
    };

    //function to more add shoes to the shoeData
    var addShoe = function (shoeObject) {

        let existingShoe = shoesData.filter(function (shoeItem) {
            return shoeItem.brand == shoeObject.brand &&
                shoeItem.color == shoeObject.color &&
                shoeItem.price == shoeObject.price &&
                shoeItem.size == shoeObject.size &&
                shoeItem.qty == shoeObject.qty
        });
        if (existingShoe.length !== 0) {
            console.log('shoe already added');
            return shoesData
        } else {
            shoesData.push({
                brand: shoeObject.brand,
                color: shoeObject.color,
                price: shoeObject.price,
                qty: shoeObject.qty,
                size: shoeObject.size
            });
            storeShoes(shoesData);
            return shoesData
        };

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

            if (tmpShoe[0].qty > 0) {
                tmpShoe[0].qty--;
                storeShoes(shoesData);
                return tmpShoe
            }
        };

        var returnItem = function () {
            if (tmpShoe[0].qty > 0) {
                tmpShoe[0].qty++;
                return tmpShoe
            }
        };
        return {
            buyItem,
            returnItem
        }
    }

    return {

        getShoes,
        doSales,
        addShoe,
        storeShoes,
        getStoredShoes
    }

};