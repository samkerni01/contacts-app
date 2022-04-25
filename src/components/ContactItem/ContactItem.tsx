import { ReactComponent as ProfileIcon } from './profile.svg';

import styles from './ContactItem.module.css';

export default function ContactItem({
	contact
}: {
	contact: { name: string; phone: string };
}) {
	return (
		<li className={styles.wrapper}>
			<ProfileIcon />
			<span>{contact.name}</span>
			<span>{contact.phone}</span>
			<span className={styles.btn}>Edit</span>
			<span className={styles.btn}>Delete</span>
		</li>
	);
}
