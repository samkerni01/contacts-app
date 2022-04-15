import { makeAutoObservable } from 'mobx';

class Auth {
	passed = false;

	constructor() {
		makeAutoObservable(this);
	}

	validation(data: FormData) {
		fetch('http://localhost:3001/login')
			.then((res) => res.json())
			.then((json) => {
				if (
					json.email === data.get('email') &&
					json.password === data.get('password')
				) {
					this.passed = true;
				}
			});
	}
}

export default new Auth();
