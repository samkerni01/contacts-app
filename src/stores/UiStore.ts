import { makeAutoObservable } from 'mobx';

class UiStore {
	form = false;
	search = false;
	edit = 0;

	constructor() {
		makeAutoObservable(this);
	}

	setForm() {
		this.form = !this.form;
	}

	setSearch() {
		this.search = !this.search;
	}

	setEdit(id: number) {
		this.edit = id;
	}
}

export default new UiStore();
