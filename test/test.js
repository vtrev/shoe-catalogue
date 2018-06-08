describe('getShoes function', function () {

    it('Given an object with specs it should return an object matching the given specifications', function () {
        let shoeSpecs = {
            color: 'black',
            brand: "nike",
            size: 5
        };
        let expectedOutput = {
            color: 'black',
            brand: "nike",
            price: 500,
            qty: 10,
            size: 5
        };


        assert.deepEqual(ShoeFactory().getShoes(shoeSpecs), expectedOutput);

    });
});

describe('doSales function(buying an item)', function () {
    it('Given shoe specifications, the function should reduce the quantity of the shoe in question by 1', function () {
        //in stock qty = 10
        let shoeSpecsBeforeReduce = {
            brand: "nike",
            color: 'black',
            price: 500,
            size: 5
        };
        //after reduce in stock qty should be 9
        let shoeSpecsAfterReduce = {
            brand: "nike",
            color: 'black',
            price: 500,
            qty: 9,
            size: 5
        };
        assert.deepEqual(ShoeFactory().doSales('buy', shoeSpecsBeforeReduce), shoeSpecsAfterReduce);
    });
});
describe('doSales function (returning an item)', function () {
    it('Given shoe specifications, the function should increase (return the item )the quantity of the shoe in question by 1', function () {
        //in stock qty = 10
        let shoeSpecsBeforeGain = {
            brand: "nike",
            color: 'black',
            size: 5
        };
        //after gain in stock qty is expected to be 11
        let shoeSpecsAfterGain = {
            brand: "nike",
            color: 'black',
            price: 500,
            qty: 11,
            size: 5
        };

        assert.deepEqual(ShoeFactory().doSales('return', shoeSpecsBeforeGain), shoeSpecsAfterGain)
    });
});

describe('addShoe function', function () {

    it('given specifications brand,color,price,quantity and size, it should be able to append the new shoe object into the shoes Data array', function () {

        ShoeFactory().addShoe('Jordan', 'Pink', 999, 5, 6);

    });
});