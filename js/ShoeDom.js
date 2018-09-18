shoes = ShoeFactory(shoesArray);

let searchBtnElement = document.getElementById('searchButton');

let displayShoes = function (shoesToDisplay) {
    let shoesData = {};
    shoesData['shoes'] = shoesToDisplay.reverse()
    var shoesDataElement = document.getElementById("shoesArea");
    var shoesDataTemplateSource = document.getElementById("shoesTemplate").innerHTML;
    var shoesTemplate = Handlebars.compile(shoesDataTemplateSource);
    var shoesHTML = shoesTemplate(shoesData);
    shoesDataElement.innerHTML = shoesHTML;
};

searchBtnElement.addEventListener('click', function search() {
    let shoeBrand = document.getElementById('shoeBrand').value;
    let shoeColor = document.getElementById('shoeColor').value;
    let shoeSize = document.getElementById('shoeSize').value;
    let specs = {};
    if (shoeBrand !== 'null') {
        specs.brand = shoeBrand
    }
    if (shoeColor !== 'null') {
        specs.color = shoeColor
    }
    if (shoeSize !== 'null') {
        specs.size = shoeSize
    }
    displayShoes(shoes.getShoes(specs));

});