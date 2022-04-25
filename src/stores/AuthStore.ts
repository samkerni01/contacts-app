import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
	passed = false;

	constructor() {
		makeAutoObservable(this);
	}

	async validation(data: FormData) {
		await fetch('http://localhost:3001/login')
			.then((res) => res.json())
			.then((json) => {
				if (
					json.username === data.get('username') &&
					json.password === data.get('password')
				) {
					runInAction(() => {
						this.passed = true;
					});
				}
			});
	}
}

export default new AuthStore();
