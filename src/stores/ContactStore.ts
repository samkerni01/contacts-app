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

	addContact(id: string, data: FormData) {
		fetch('http://localhost:3001/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: id,
				name: data.get('name'),
				phone: data.get('phone')
			})
		})
			.then((res) => res.json())
			.then((json) => {
				runInAction(() => {
					this.contacts = [...this.contacts, json];
					this.resetFilteredContacts();
				});
			});
	}

	deleteContact(id: number) {
		fetch('http://localhost:3001/contacts/' + id, {
			method: 'DELETE'
		}).then(() => this.fetchContacts());
	}

	editContact(id: number, data: FormData) {
		fetch('http://localhost:3001/contacts/' + id, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				name: data.get('name'),
				phone: data.get('phone')
			})
		}).then(() => this.fetchContacts());
	}
}

export default new ContactStore();
