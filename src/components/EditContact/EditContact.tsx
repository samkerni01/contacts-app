import UiStore from '../../stores/UiStore';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

import styles from './EditContact.module.css';

export default function EditContact({
	name,
	phone
}: {
	name: string;
	phone: string;
}) {
	return (
		<form className={styles.wrapper}>
			<input type="text" name="name" defaultValue={name} />
			<input type="text" name="phone" defaultValue={phone} />

			<CheckIcon />

			<CloseIcon
				className={styles.icon}
				onClick={() => UiStore.setEdit(0)}
			/>
		</form>
	);
}
