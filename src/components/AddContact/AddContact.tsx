import { FormEvent } from 'react';

import UiStore from '../../stores/UiStore';
import ContactStore from '../../stores/ContactStore';

import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './AddContact.module.css';

export default function AddContact() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		ContactStore.addContact(data);
		UiStore.setForm();
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			Name:
			<input type="text" name="name" placeholder="e.g.: Sam" />
			Phone:
			<input type="text" name="phone" placeholder="e.g.: +79996098988" />
			<div className={styles.icons}>
				<button className={styles.btn}>
					<CheckIcon />
				</button>

				<CloseIcon onClick={() => UiStore.setForm()} />
			</div>
		</form>
	);
}
