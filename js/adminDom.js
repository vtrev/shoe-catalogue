let addBtnElement = document.getElementById('addButton');


addBtnElement.addEventListener('click', function run() {
    let addShoeBrand = document.getElementById('addShoeBrand').value;
    let addShoeColor = document.getElementById('addShoeColor').value;
    let addShoeSize = document.getElementById('addShoeSize').value;
    let addShoeQty = document.getElementById('addShoeQty').value;
    let addShoePrice = document.getElementById('addShoePrice').value;
    let addSpecs = {};
    if ((addShoeBrand !== "null") && (addShoeColor !== "null") && (addShoeSize !== "null") && (addShoeQty !== "") && (addShoePrice !== "")) {
        addSpecs.brand = addShoeBrand;
        addSpecs.color = addShoeColor;
        addSpecs.id = shoesArray.length;
        addSpecs.price = addShoePrice;
        addSpecs.qty = addShoeQty;
        addSpecs.size = addShoeSize;
    };
    // now store the new shoe into the array
    console.log(addSpecs);

});