import { makeAutoObservable, runInAction } from 'mobx';

interface List {
	id: number;
	name: string;
	phone: string;
}

class ContactStore {
	contacts: List[] = [];
	filteredContacts: List[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	resetFilteredContacts() {
		this.filteredContacts = this.contacts;
	}

	fetchContacts() {
		fetch('http://localhost:3001/contacts')
			.then((res) => res.json())
			.then((json) => {
				runInAction(() => {
					this.contacts = json;
					this.resetFilteredContacts();
				});
			});
	}

	filterContacts(value: string) {
		const re = new RegExp(value, 'i');

		this.filteredContacts = this.contacts.filter(
			(contact) => re.test(contact.name) || re.test(contact.phone)
		);
	}

	addContact(data: FormData) {
		fetch('http://localhost:3001/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.contacts.length && this.contacts.length + 1,
				name: data.get('name'),
				phone: data.get('phone')
			})
		})
			.then((res) => res.json())
			.then((json) => {
				runInAction(() => {
					this.contacts = [json, ...this.contacts];
					this.resetFilteredContacts();
				});
			});
	}

	deleteContact(id: number) {
		fetch('http://localhost:3001/contacts/' + id, {
			method: 'DELETE'
		}).then(() => this.fetchContacts());
	}
}

export default new ContactStore();
