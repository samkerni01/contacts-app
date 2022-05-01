import { FormEvent } from 'react';

import UiStore from '../../stores/UiStore';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

import styles from './EditContact.module.css';
import ContactStore from '../../stores/ContactStore';

export default function EditContact({
	name,
	phone,
	id
}: {
	name: string;
	phone: string;
	id: number;
}) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		ContactStore.editContact(id, data);
		UiStore.setEdit(0);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<input type="text" maxLength={20} name="name" defaultValue={name} />

			<button className={styles.btn}>
				<CheckIcon />
			</button>

			<CloseIcon
				className={styles.icon}
				onClick={() => UiStore.setEdit(0)}
			/>

			<input
				type="text"
				maxLength={15}
				name="phone"
				defaultValue={phone}
				className={styles.phone}
			/>
		</form>
	);
}
