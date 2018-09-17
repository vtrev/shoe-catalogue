var ShoeFactory = function (shoesData) {
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


    let addToCart = function (item) {

        let shoeToAdd = shoes.getShoes({
            id: item
        });

        let checkOut = function () {
            shoes.doSales(shoeToAdd[0]).buyItem();
            setTmpShoes();
            displayShoes(shoeToAdd);
            return shoeToAdd
        }

        if (!holdingArray.some(function (shoe) {
                return shoe === shoeToAdd[0];
            })) {
            holdingArray.push(shoeToAdd[0]);
            // checkOut();
        } else {
            console.log('shoe already in cart')
        };



        return {
            checkout: checkOut
        }

    };












    // let storeShoes = function (shoesToStore) {
    //     localStorage.setItem('shoesData', JSON.stringify(shoesToStore));
    // };

    // let getStoredShoes = function () {
    //     return JSON.parse(localStorage.getItem('shoesData'));
    // };

    //function to  add more shoes to the shoeData
    // var addShoe = function (shoeObject) {

    //     let existingShoe = shoesData.filter(function (shoeItem) {
    //         return shoeItem.id == shoeObject.id;
    //     });
    //     //if the shoe does not exist, the length will be 0
    //     if (existingShoe.length !== 0) {
    //         console.log('shoe already added');
    //         //just gain the qty
    //         return shoesData
    //     } else {
    //         console.log('new shoe')
    //         shoesData.push({
    //             brand: shoeObject.brand,
    //             color: shoeObject.color,
    //             price: shoeObject.price,
    //             id: shoeObject.id,
    //             qty: shoeObject.qty,
    //             size: shoeObject.size
    //         });
    //         storeShoes(shoesData);
    //         return shoesData
    //     };

    // };

    // match the specs and return the  shoe needed by the customer

    //function for buying and returning items

    // let doSales = function (specs) {
    //     let tmpShoe = getShoes(specs);
    //     var buyItem = function () {

    //         if (tmpShoe[0].qty > 0) {
    //             tmpShoe[0].qty--;
    //             // storeShoes(shoesData);
    //             return tmpShoe
    //         }
    //     };

    //     var returnItem = function () {
    //         tmpShoe[0].qty++;
    //         return tmpShoe

    //     };
    //     return {
    //         buyItem,
    //         returnItem
    //     }
    // }
    return {

        getShoes,
        // doSales,
        // addShoe,
        // storeShoes,
        // getStoredShoes
    }

};