import { makeAutoObservable } from 'mobx';

class Header {
	showForm = false;

	constructor() {
		makeAutoObservable(this);
	}

	setShowForm() {
		this.showForm = !this.showForm;
	}
}

export default new Header();
