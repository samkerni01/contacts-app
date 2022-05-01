import { FormEvent } from 'react';

import UiStore from '../../stores/UiStore';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

import styles from './Edit.module.css';
import ContactStore from '../../stores/ContactStore';

export default function Edit({
	name,
	phone,
	id,
	i
}: {
	name: string;
	phone: string;
	id: string;
	i: number;
}) {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		ContactStore.editContact(id, data, i);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				defaultValue={name}
				minLength={3}
				maxLength={25}
				required
			/>

			<button className={styles.btn}>
				<CheckIcon />
			</button>

			<CloseIcon
				className={styles.icon}
				onClick={() => UiStore.setEdit(-1)}
			/>

			<input
				type="text"
				name="phone"
				defaultValue={phone}
				required
				minLength={5}
				maxLength={15}
				pattern="[0-9+]{5,15}"
				className={styles.phone}
			/>
		</form>
	);
}
