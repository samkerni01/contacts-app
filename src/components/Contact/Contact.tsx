import { observer } from 'mobx-react-lite';

import Edit from '../Edit/Edit';

import ContactStore from '../../stores/ContactStore';
import UiStore from '../../stores/UiStore';

import { ReactComponent as ProfileIcon } from '../../icons/profile.svg';

import styles from './Contact.module.css';

function Contact({
	name,
	phone,
	id,
	i
}: {
	name: string;
	phone: string;
	id: number;
	i: number;
}) {
	return (
		<div className={styles.wrapper}>
			<ProfileIcon className={styles.icon} />

			{UiStore.edit !== id ? (
				<>
					<span className={styles.name}>{name}</span>

					<span
						className={styles.btn}
						onClick={() => UiStore.setEdit(id)}
					>
						Edit
					</span>

					<span
						className={styles.btn}
						onClick={() => ContactStore.deleteContact(id, i)}
					>
						Delete
					</span>

					<span className={styles.phone}>{phone}</span>
				</>
			) : (
				<Edit name={name} phone={phone} id={id} i={i} />
			)}
		</div>
	);
}

export default observer(Contact);
