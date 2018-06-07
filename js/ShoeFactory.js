var ShoeFactory = function () {

    //create shoe class here
    //extend shoe class to make objects
    //constructor function must take in,color,brand,price,qty
    //add method to buy which reduces this.qty and return item method to increase this.qty
    //when user adds new shoes just call the constructor
    var shoesData = [{
            color: 'blue',
            brand: "Mike",
            price: 350,
            qty: 5,
            size: 4
        },
        {
            color: 'orange',
            brand: "Hadidas",
            price: 275,
            qty: 3,
            size: 5
        }
    ];

    var getShoes = function (specs) {

        for (let i = 0; i < shoesData.length; i++) {
            let index = shoesData[i];;
            if (index.brand == specs.brand) {
                if (index.size == specs.size) {
                    if (index.color == specs.color) {
                        return index

                    };
                };
            };
        };
    };
    return {
        getShoes

    }

};