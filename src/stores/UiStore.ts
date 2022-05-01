import { makeAutoObservable } from 'mobx';

import ContactStore from './ContactStore';

class UiStore {
	form = false;
	search = false;
	error = false;
	edit = -1;

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

	setEdit(i: number) {
		this.edit = i;
	}
}

export default new UiStore();
