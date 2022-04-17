import { makeAutoObservable } from 'mobx';

class Header {
	displayForm = false;
	displaySearch = false;

	constructor() {
		makeAutoObservable(this);
	}

	setDisplayForm() {
		this.displayForm = !this.displayForm;
	}

	setDisplaySearch() {
		this.displaySearch = !this.displaySearch;
	}
}

export default new Header();
