import { makeAutoObservable } from 'mobx';

class UiStore {
	form = false;
	search = false;

	constructor() {
		makeAutoObservable(this);
	}

	setForm() {
		this.form = !this.form;
	}

	setSearch() {
		this.search = !this.search;
	}
}

export default new UiStore();
