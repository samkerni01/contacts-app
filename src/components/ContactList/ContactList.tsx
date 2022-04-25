import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import ContactItem from '../ContactItem/ContactItem';

import TodoStore from '../../stores/TodoStore';

import styles from './ContactList.module.css';

function ContactList() {
	useEffect(() => {
		TodoStore.fetchContactList();
	}, []);

	return (
		<ul className={styles.wrapper}>
			{TodoStore.contactList &&
				TodoStore.contactList.map((contact) => (
					<ContactItem contact={contact} key={contact.id} />
				))}
		</ul>
	);
}

export default observer(ContactList);
