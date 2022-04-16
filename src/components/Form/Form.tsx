import header from '../../stores/header';

import check from './icons/check.svg';
import close from './icons/close.svg';

import styles from './Form.module.css';

export default function Form() {
	return (
		<form className={styles.wrapper}>
			<span>Name:</span>

			<input className={styles.input} type="text" />

			<span>Phone:</span>

			<input className={styles.input} type="text" />

			<div className={styles.icons}>
				<button className={styles.btn}>
					<img className={styles.icon} src={check} alt="check" />
				</button>

				<img
					className={styles.icon}
					src={close}
					alt="close"
					onClick={() => header.setShowForm()}
				/>
			</div>
		</form>
	);
}
