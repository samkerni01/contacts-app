import { observer } from 'mobx-react-lite';

import ContactItem from '../ContactItem/ContactItem';

import ContactStore from '../../stores/ContactStore';

import styles from './ContactList.module.css';

function ContactList() {
	return (
		<div className={styles.wrapper}>
			{ContactStore.filteredContacts.length > 0 ? (
				<>
					{ContactStore.filteredContacts.map((contact) => (
						<ContactItem
							name={contact.name}
							phone={contact.phone}
							id={contact.id}
							key={contact.id}
						/>
					))}
				</>
			) : ContactStore.contacts.length > 0 ? (
				<p>No matches found</p>
			) : (
				<p>Contact list is empty</p>
			)}
		</div>
	);
}

export default observer(ContactList);
