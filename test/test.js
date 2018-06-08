describe('getShoes function', function () {

    it('Given an object with specs it should return an object matching the given specifications', function () {
        let shoeSpecs = {
            brand: "nike",
            color: 'black',
            size: 10
        };
        let expectedOutput = {
            brand: "nike",
            color: 'black',
            price: 500,
            qty: 10,
            size: 5
        };


        assert.deepEqual(ShoeFactory().getShoes(shoeSpecs), expectedOutput);

    });
});

// describe('doSales function(buying an item)', function () {
//     it('Given shoe specifications, the function should reduce the quantity of the shoe in question by 1', function () {
//         //in stock qty = 10
//         let shoeSpecsBeforeReduce = {
//             brand: "nike",
//             color: 'black',
//             price: 500,
//             size: 5
//         };
//         //after reduce in stock qty should be 9
//         let shoeSpecsAfterReduce = {
//             brand: "nike",
//             color: 'black',
//             price: 500,
//             qty: 9,
//             size: 5
//         };
//         assert.deepEqual(ShoeFactory().doSales(shoeSpecsBeforeReduce).buyItem(), shoeSpecsAfterReduce);
//     });
// });
// describe('doSales function (returning an item)', function () {
//     it('Given shoe specifications, the function should increase (return the item )the quantity of the shoe in question by 1', function () {
//         //in stock qty = 10
//         let shoeSpecsBeforeGain = {
//             brand: "nike",
//             color: 'black',
//             size: 5
//         };
//         //after gain in stock qty is expected to be 11
//         let shoeSpecsAfterGain = {
//             brand: "nike",
//             color: 'black',
//             price: 500,
//             qty: 11,
//             size: 5
//         };

//         assert.deepEqual(ShoeFactory().doSales(shoeSpecsBeforeGain).returnItem(), shoeSpecsAfterGain)
//     });
// });

// describe('addShoe function', function () {

//     it('given specifications brand,color,price,quantity and size, it should be able to append the new shoe object into the shoes Data array', function () {

//         let shoeToAdd = {
//             brand: 'Jordan',
//             color: 'Pink',
//             price: 999,
//             qty: 5,
//             size: 6

//         };

//         ShoeFactory().addShoe(shoeToAdd);


//     });
// });