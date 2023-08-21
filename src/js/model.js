import cars from './data.js';

export const state = {
  selected:'',
  price: {
    min:0,
    max:0
  },
  results:[]
}

const createCarObject = function (data) {
  state.results = data.map(item => {
    return {
      id: item.id,
      image:item.image,
      maker: item.maker,
      model: item.model,
      year: item.year,
      mileage: item.mileage,
      horsepower: item.horsepower,
      price: item.price
    }
  });
}

export const loadResults = function(selected) {
  try {
    if(!selected) return;
    state.selected = selected;
    state.selected === "all" ? createCarObject(cars) : createCarObject(cars.filter( item => item.type === state.selected) );   
  } catch (error) {
    console.log(error); 
  } 
}

export const loadSearchResults = function(char) {
  try {
    if(!char) return;
    createCarObject(cars.filter( item => item.maker.toLocaleLowerCase().startsWith(char)));
  } catch (error) {
    console.log(error);
  }
}

export const loadPriceResults = function(value) {
  try {
    if(!value);
    createCarObject(cars.filter( item => item.price <= value));
  } catch (error) {
    console.log(error);
  }
}

export const setValues = function (item) {

  if(!item)return;
  const valueList = cars.map((car) => car[item]);
  const minValue = Math.min(...valueList);
  const maxValue = Math.max(...valueList);

  state[item].min = minValue;
  state[item].max = maxValue;
}

export const rangeNewValues = function(item) {
  if(!item) return;
  state.price.max = item;
}
