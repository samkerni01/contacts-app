import { FormEvent, useId } from 'react';

import UiStore from '../../stores/UiStore';
import ContactStore from '../../stores/ContactStore';

import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './AddContact.module.css';

export default function AddContact() {
	const id = useId();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		ContactStore.addContact(id, data);
		UiStore.setForm();
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			Name:
			<input
				type="text"
				maxLength={20}
				name="name"
				placeholder="e.g.: Sam"
			/>
			Phone:
			<input
				type="text"
				maxLength={15}
				name="phone"
				placeholder="e.g.: +79996098988"
			/>
			<div className={styles.icons}>
				<button className={styles.btn}>
					<CheckIcon />
				</button>

				<CloseIcon onClick={() => UiStore.setForm()} />
			</div>
		</form>
	);
}
