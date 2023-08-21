export default class rangeView {

    _cleanWrapRange() {
        this._cleanElement.innerHTML ='';
    }
    _printInputRange(minValue,maxValue) {
        return `<input type="range" class="form-range" min=${minValue} max=${maxValue} value=${maxValue}>`;
    }

    rangeHandler(handler) {
		this._hookRange.addEventListener("input", (ev) => {
			const value = ev.target.value;
			handler(value);
		});
	}

    renderValuesRange(minValue, maxValue) {
        const valuesRange = this._printValuesRange(minValue,maxValue);
        this._cleanWrapRange()
        this._rangeValuesElement.insertAdjacentHTML('beforeend', valuesRange);
    }

    renderInputRange(minValue, maxValue) {      
        const inputRange = this._printInputRange(minValue,maxValue);
        this._rangeInputElement.insertAdjacentHTML('beforeend', inputRange);
    }

}