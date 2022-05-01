import { makeAutoObservable, runInAction } from 'mobx';

import ContactStore from './ContactStore';
import UiStore from './UiStore';

class AuthStore {
	passed = false;

	constructor() {
		makeAutoObservable(this);
	}

	validation(data: FormData) {
		fetch('http://localhost:3001/login')
			.then((res) => res.json())
			.then((json) => {
				if (
					json.username === data.get('username') &&
					json.password === data.get('password')
				) {
					runInAction(() => {
						this.passed = true;
					});

					ContactStore.fetchContacts();
				} else {
					UiStore.setError();
				}
			});
	}
}

export default new AuthStore();
