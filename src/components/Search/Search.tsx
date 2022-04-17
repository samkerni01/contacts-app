import header from '../../stores/header';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './Search.module.css';

export default function Search() {
	return (
		<div className={styles.wrapper}>
			Search:
			<input type="text" className={styles.input} />
			<CloseIcon
				className={styles.icon}
				onClick={() => header.setDisplaySearch()}
			/>
		</div>
	);
}
