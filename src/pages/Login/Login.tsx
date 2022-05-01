import { observer } from 'mobx-react-lite';

import LoginStore from '../../stores/LoginStore';

import { ReactComponent as ProfileIcon } from '../../icons/profile.svg';
import { ReactComponent as LockIcon } from './lock.svg';

import styles from './Login.module.css';
import UiStore from '../../stores/UiStore';

function Login() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		LoginStore.validation(data);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<h1 className={styles.title}>Welcome!</h1>
			<p className={styles.descr}>Enter your login details</p>
			<span className={styles.text}>Username</span>

			<div className={styles.relative}>
				<ProfileIcon className={styles.icon} />

				<input
					type="text"
					name="username"
					placeholder="e.g.: admin"
					required
					className={styles.input}
				/>
			</div>

			<span className={`${styles.text} ${styles.mt24}`}>Password</span>

			<div className={styles.relative}>
				<LockIcon className={styles.icon} />

				<input
					type="password"
					name="password"
					placeholder="e.g.: admin"
					required
					className={styles.input}
				/>
			</div>

			{UiStore.error && (
				<p className={styles.error}>Wrong login or password</p>
			)}

			<button className={styles.btn}>Sign In</button>
		</form>
	);
}

export default observer(Login);
