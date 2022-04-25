import AuthStore from '../../stores/AuthStore';

import profile from './icons/profile.svg';
import lock from './icons/lock.svg';

import styles from './Auth.module.css';

export default function Auth() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		AuthStore.validation(data);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<div className={styles.title}>Welcome!</div>
			<div className={styles.descr}>Enter your login details</div>

			<div className={styles.text}>Username</div>
			<div className={styles.relative}>
				<img className={styles.icon} src={profile} alt="profile" />
				<input
					className={styles.input}
					type="text"
					name="username"
					placeholder="e.g.: admin"
				/>
			</div>

			<div className={`${styles.text} ${styles.mt24}`}>Password</div>
			<div className={styles.relative}>
				<img className={styles.icon} src={lock} alt="lock" />
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
