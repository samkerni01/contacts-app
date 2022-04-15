import auth from '../../store/auth';

import email from './icons/email.svg';
import lock from './icons/lock.svg';

import styles from './SignIn.module.css';

export default function SignIn() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);

		auth.validation(data);
	};

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<div className={styles.title}>Welcome!</div>
			<div className={styles.descr}>Enter your login details</div>

			<div className={styles.text}>E-Mail</div>
			<div className={styles.relative}>
				<img className={styles.icon} src={email} alt="email" />
				<input
					className={styles.input}
					type="text"
					name="email"
					placeholder="e.g.: elonmusk@mars.com"
				/>
			</div>

			<div className={`${styles.text} ${styles.mt24}`}>Password</div>
			<div className={styles.relative}>
				<img className={styles.icon} src={lock} alt="lock" />
				<input
					className={styles.input}
					type="text"
					name="password"
					placeholder="e.g.: xaea-12"
				/>
			</div>

			<button className={styles.btn}>Sign In</button>
		</form>
	);
}
