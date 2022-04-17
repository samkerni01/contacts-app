import header from '../../stores/header';

import { ReactComponent as CheckIcon } from './check.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import styles from './Form.module.css';

export default function Form() {
	return (
		<form className={styles.wrapper}>
			Name:
			<input type="text" />
			Phone:
			<input type="text" />
			<div className={styles.icons}>
				<button className={styles.btn}>
					<CheckIcon className={styles.icon} />
				</button>

				<CloseIcon
					className={styles.icon}
					onClick={() => header.setDisplayForm()}
				/>
			</div>
		</form>
	);
}
