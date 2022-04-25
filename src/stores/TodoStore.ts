import { makeAutoObservable, runInAction } from 'mobx';

class TodoStore {
	contactList: Array<{ id: string; name: string; phone: string }> = [];

	constructor() {
		makeAutoObservable(this);
	}

	fetchContactList() {
		fetch('http://localhost:3001/contacts')
			.then((res) => res.json())
			.then((json) => {
				runInAction(() => {
					this.contactList = json;
				});
			});
	}
}

export default new TodoStore();
