let ShoeFactory = function (shoesData) {
    console.log(shoesData);

    let getShoes = function (specs) {
        let filteredShoes = shoesData.filter(function (shoe) {
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


    // ============================================= ADD TO CART ====================================================== //
    let addToCart = function (item) {
        let holdingArray = [];
        let shoeToAdd = shoes.getShoes({
            id: item
        });
        if (!holdingArray.some(function (shoe) {
                return shoe === shoeToAdd[0];
            })) {
            holdingArray.push(shoeToAdd[0]);
            shoes.doSales(shoeToAdd[0]).buyItem();
        } else {
            console.log('shoe already in cart')
        };
        return {
            checkout: checkOut
        };
    };


    // =======================================================DO SALES ========================================================//
    let doSales = function (specs) {
        let tmpShoe = getShoes(specs);
        let buyItem = function () {
            if (tmpShoe[0].qty > 0) {
                tmpShoe[0].qty--;
                return tmpShoe
            };
        };
        let returnItem = function () {
            tmpShoe[0].qty++;
            return tmpShoe
        };
        return {
            buyItem,
            returnItem
        };
    };


    // ============================================ADD SHOE================================================================== //
    // function to  add more shoes to the shoeData

    let addShoe = function (shoeObject) {
        let existingShoe = shoesData.filter(function (shoeItem) {
            return shoeItem.id == shoeObject.id;
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
                size: shoeObject.size,
                "img-link": shoeObject["img-link"]
            });
            // console.log(shoesData)
            storeShoes(shoesData);

            return shoesData
        };

    };



    // ====================================== STORE SHOES TO LOCAL STORAGE ===========================================\
    let storeShoes = function (shoesToStore) {
        localStorage.setItem('shoesData', JSON.stringify(shoesToStore));
    };

    // let getStoredShoes = function () {
    //     return 
    // };


    // match the specs and return the  shoe needed by the customer

    //function for buying and returning items


    return {

        getShoes,
        doSales,
        addToCart,
        addShoe,
        // storeShoes,
        // getStoredShoes
    }

};