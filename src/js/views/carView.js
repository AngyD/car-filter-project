class CarView {

  _list;
	_listCars = document.querySelector('.cars-list');
	_wrapBtnTop = document.querySelector('.wrap-btn');
	_searchInput = document.querySelector('.search');

	_cleanWrapCards() {
			this._listCars.innerHTML = '';
	}
	_renderMessage(){	
		const message = `
			<div class ="alert alert-danger" role="alert">
				<h2>The requested car is not available. Try again.</h2>
			</div>
		`;
		this._cleanWrapCards();
		this._listCars.insertAdjacentHTML('afterbegin', message);
	}

  _renderCarCard(item) {
		return `
		<div class="card" style="width: 25%;">
			<img class="card-img-top px-2" src="${item.image}" type="image/png" alt="car image">
			<div class="card-body">
				<h5 class="card-title">${item.maker} ${item.model}</h5>
				<p class="card-subtitle">Sport 1.0 Petrol ${item.horsepower}CV - Manual</p>
				<p class="card-text fs-3 text-success text-end py-4"><strong>${item.price}€</strong></p>
				<p class="text-secondary fs-6 px-2"><i class="bi bi-info-circle"></i> ${item.year}-${item.mileage} Km</p>
				<div class="d-grid p-2">
					<button type="button" class="btn btn-success">More info</button>
				</div>
			</div>
		</div>`;
	}

  renderCars(list) {

		if(list.length === 0)
		return this._renderMessage();
		
		this._list = list;
		const markup = this._list.map( item => this._renderCarCard(item)).join('');
		this._cleanWrapCards();
		this._listCars.insertAdjacentHTML('afterbegin', markup);
	}

	buttonHandler(handler) {
		this._wrapBtnTop.addEventListener("click", (ev) => {
			handler(ev.target.id);
		});
	}

	keyHandler(handler) {
		this._searchInput.addEventListener("keyup", (ev) => {
			const value = ev.target.value.toLowerCase();
			console.log(value);
			handler(value);
		});
	}
}

export default new CarView();