describe('getShoes function', function () {

    it('Given an object with specs it should return an object matching the given specifications,the specs can be brand,size,color or all 3', function () {
        let testData = [{
            "brand": "Nike",
            "color": "Black",
            "price": 500,
            "qty": 10,
            "size": 10
        }, {
            "brand": "Adidas",
            "color": "White",
            "price": 250,
            "qty": 10,
            "size": 5
        }];

        let shoeSpecs = {
            brand: 'Nike',
            color: 'Black',
            size: 10
        };
        //getting the shoe(s) using only brand name
        assert.deepEqual(ShoeFactory(testData).getShoes({
            brand: 'Adidas'
        }), [testData[1]]);
        //get the shoe(s) using only the size 
        assert.deepEqual(ShoeFactory(testData).getShoes({
            size: 5

        }), [testData[1]]);
        assert.deepEqual(ShoeFactory(testData).getShoes({
            size: 4

        }), []);
        //getting the shoe(s) using only the color 
        assert.deepEqual(ShoeFactory(testData).getShoes({
            color: 'White'

        }), [testData[1]]);

        //getting the shoe using brand,color and size
        assert.deepEqual(ShoeFactory(testData).getShoes(shoeSpecs), [testData[0]]);


    });
});



describe('doSales function(buying an item)', function () {
    it('Given shoe specifications, the function should reduce the quantity of the shoe in question by 1', function () {
        let testData = [{
            brand: "Adidas",
            color: "Pink",
            price: 800,
            qty: 15,
            size: 7
        }, {
            brand: "Jordan",
            color: "Pink",
            price: 999,
            qty: 5,
            size: 6
        }];


        let shoeSpecs = {
            brand: 'Jordan',
            color: 'Pink',
            size: 6
        };
        let expectedOutput = [{
            brand: 'Jordan',
            color: 'Pink',
            price: 999,
            qty: 4,
            size: 6
        }];
        assert.deepEqual(ShoeFactory(testData).doSales(shoeSpecs).buyItem(), expectedOutput);
    });
});
describe('doSales function (returning an item)', function () {
    it('Given shoe specifications, the function should increase (return the item ) quantity of the shoe in question by 1', function () {
        let testData = [{
            brand: "Adidas",
            color: "Pink",
            price: 800,
            qty: 15,
            size: 7
        }, {
            brand: "Jordan",
            color: "Pink",
            price: 999,
            qty: 5,
            size: 6
        }];

        let shoeSpecs = {
            brand: 'Adidas',
            color: 'Pink',
            size: 7
        };

        let expectedOutput = [{
            brand: 'Adidas',
            color: 'Pink',
            price: 800,
            qty: 16,
            size: 7
        }];

        assert.deepEqual(ShoeFactory(testData).doSales(shoeSpecs).returnItem(), expectedOutput);
    });
});

describe('addShoe function', function () {

    it('given specifications brand,color,price,quantity and size, it should be able to append the new shoe object into the shoes Data array', function () {

        let testData = [{
            brand: 'Timberland',
            color: "Brown",
            price: 3500,
            qty: 5,
            size: 8
        }];

        let shoeToAdd = [{
            brand: 'Jordan',
            color: 'Pink',
            price: 999,
            qty: 5,
            size: 6

        }];
        let newData = testData.concat(shoeToAdd);

        assert.deepEqual(ShoeFactory(testData).addShoe(shoeToAdd[0]), newData);


    });
});