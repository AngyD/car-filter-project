import * as model from './model.js';
import carView from './views/carView.js';
import priceRangeView from './views/priceRangeView.js';


controlResults = function (selected){
    //loading cars
    model.loadResults(selected);
    //rendering cars
    carView.renderCars(model.state.results);
}

controlAllResults = function() {
    controlResults('all');
}

controlRange = function() {
    //price
    model.setValues('price');
    priceRangeView.renderValuesRange(model.state.price.min, model.state.price.max); 
    priceRangeView.renderInputRange(model.state.price.min, model.state.price.max); 
}

controlSearchResults = function(char) {
    model.loadSearchResults(char);
    carView.renderCars(model.state.results); 
}

controlNewRange = function(value) {
    model.rangeNewValues(value);
    priceRangeView.renderValuesRange(model.state.price.min, model.state.price.max); 
    model.loadPriceResults(model.state.price.max);
    carView.renderCars(model.state.results);
}

// start app
const init = function() {
    controlAllResults();
    controlRange();
    carView.buttonHandler(controlResults);
    carView.keyHandler(controlSearchResults);
    priceRangeView.rangeHandler(controlNewRange);
}

init();
