import { makeAutoObservable } from 'mobx';

class App {
	showForm = false;

	constructor() {
		makeAutoObservable(this);
	}

	setShowForm() {
		this.showForm = !this.showForm;
	}
}

export default new App();
