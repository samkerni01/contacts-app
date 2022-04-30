import AuthStore from '../../stores/AuthStore';

import { ReactComponent as ProfileIcon } from '../../icons/profile.svg';
import { ReactComponent as LockIcon } from './lock.svg';

import styles from './Auth.module.css';

export default function Auth() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		AuthStore.validation(data);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<h1 className={styles.title}>Welcome!</h1>
			<p className={styles.descr}>Enter your login details</p>
			<span className={styles.text}>Username</span>

			<div className={styles.relative}>
				<ProfileIcon className={styles.icon} />

				<input
					className={styles.input}
					type="text"
					name="username"
					placeholder="e.g.: admin"
				/>
			</div>

			<span className={`${styles.text} ${styles.mt24}`}>Password</span>

			<div className={styles.relative}>
				<LockIcon className={styles.icon} />

				<input
					className={styles.input}
					type="text"
					name="password"
					placeholder="e.g.: admin"
				/>
			</div>

			<button className={styles.btn}>Sign In</button>
		</form>
	);
}
