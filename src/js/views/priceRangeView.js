import rangeView from "./rangeView";


class priceRangeView extends rangeView {

    _rangeInputElement = document.querySelector('.price');
    _hookRange = document.querySelector('.price');
    _rangeValuesElement = document.querySelector('.price__range');
    _cleanElement = document.querySelector('.price__range');

    _printValuesRange(minValue,maxValue) {
        return `<span>€ ${minValue} - € ${maxValue}</span> `;
    }
  
}

export default new priceRangeView();