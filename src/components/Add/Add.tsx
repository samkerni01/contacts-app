import { FormEvent } from 'react';
import { nanoid } from 'nanoid';

import UiStore from '../../stores/UiStore';
import ContactStore from '../../stores/ContactStore';

import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './Add.module.css';

export default function Add() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		ContactStore.addContact(nanoid(), data);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			Name:
			<input
				type="text"
				name="name"
				placeholder="e.g.: Sam"
				minLength={3}
				maxLength={30}
				required
			/>
			Phone:
			<input
				type="text"
				name="phone"
				placeholder="e.g.: +79996098988"
				required
				minLength={5}
				maxLength={15}
				pattern="[0-9+]{5,15}"
			/>
			<div className={styles.icons}>
				<button className={styles.btn}>
					<CheckIcon />
				</button>

				<CloseIcon onClick={() => UiStore.toggleForm()} />
			</div>
		</form>
	);
}
