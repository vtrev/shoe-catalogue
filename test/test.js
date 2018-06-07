describe('getShoes', function () {

    it('Given an object with specs it should return an object matching the given specifications', function () {
        let shoeSpecs = {
            color: 'blue',
            brand: "Mike",
            price: 350,
            qty: 5,
            size: 4
        };
        // console.log(ShoeFactory().getShoes(shoeSpecs));
        assert.deepEqual(ShoeFactory().getShoes(shoeSpecs), shoeSpecs);

    });
});