import UiStore from '../../stores/UiStore';
import ContactStore from '../../stores/ContactStore';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './Search.module.css';

export default function Search() {
	const onClick = () => {
		UiStore.setSearch();

		ContactStore.resetFilteredContacts();
	};

	return (
		<div className={styles.wrapper}>
			Search:
			<input
				type="text"
				className={styles.input}
				onChange={(e) => ContactStore.filterContacts(e.target.value)}
			/>
			<CloseIcon className={styles.icon} onClick={onClick} />
		</div>
	);
}
