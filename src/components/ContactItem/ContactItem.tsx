import { observer } from 'mobx-react-lite';

import EditContact from '../EditContact/EditContact';

import ContactStore from '../../stores/ContactStore';
import UiStore from '../../stores/UiStore';

import { ReactComponent as ProfileIcon } from '../../icons/profile.svg';

import styles from './ContactItem.module.css';

function ContactItem({
	name,
	phone,
	id
}: {
	name: string;
	phone: string;
	id: number;
}) {
	const onClick = () => {
		UiStore.setEdit(id);
	};

	return (
		<div className={styles.wrapper}>
			<ProfileIcon className={styles.icon} />

			{UiStore.edit !== id ? (
				<>
					<span className={styles.name}>{name}</span>

					<span className={styles.btn} onClick={onClick}>
						Edit
					</span>

					<span
						className={styles.btn}
						onClick={() => ContactStore.deleteContact(id)}
					>
						Delete
					</span>

					<span className={styles.phone}>{phone}</span>
				</>
			) : (
				<EditContact name={name} phone={phone} id={id} />
			)}
		</div>
	);
}

export default observer(ContactItem);
