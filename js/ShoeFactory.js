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
            let objectIndex = Object.keys(shoeObject);

            for (let i = 0; i < objectIndex.length; i++) {
                return shoeItem[objectIndex[i]] == shoeObject[objectIndex[i]];
            };
        });
        //if the shoe does not exist, the length will be 0
        if (existingShoe.length !== 0) {
            console.log('shoe already added');
            //just gain the qty
            return shoesData
        } else {
            shoesData.push({
                brand: shoeObject.brand,
                color: shoeObject.color,
                price: shoeObject.price,
                id: shoeObject.id,
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

            let objectKeys = Object.keys(specs);
            let holding = 0;
            for (let i = 0; i < objectKeys.length; i++) {
                holding += (shoe[objectKeys[i]] == specs[objectKeys[i]])
            };

            if (holding == objectKeys.length) {
                return true
            }

        });
        return filteredShoes;
    };
    //function for buying and returning items

    let doSales = function (specs) {
        console.log(specs);
        let tmpShoe = getShoes(specs);
        console.log(tmpShoe);
        var buyItem = function () {

            if (tmpShoe[0].qty > 0) {
                tmpShoe[0].qty--;
                // storeShoes(shoesData);
                return tmpShoe
            }
        };

        var returnItem = function () {
            tmpShoe[0].qty++;
            return tmpShoe

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