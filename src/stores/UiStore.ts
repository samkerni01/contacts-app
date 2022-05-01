import { makeAutoObservable } from 'mobx';

import ContactStore from './ContactStore';

class UiStore {
	form = false;
	search = false;
	error = false;
	edit = 0;

	constructor() {
		makeAutoObservable(this);
	}

	toggleForm() {
		this.form = !this.form;
	}

	toggleSearch() {
		this.search = !this.search;

		ContactStore.resetFilteredContacts();
	}

	setError() {
		this.error = true;
	}

	setEdit(id: number) {
		this.edit = id;
	}
}

export default new UiStore();
