import { observer } from 'mobx-react-lite';

import Header from '../Header/Header';
import Auth from '../Auth/Auth';

import auth from '../../stores/auth';

import styles from './App.module.css';
import '../../styles/globals.css';

function App() {
	return auth.passed ? (
		<div className={styles.wrapper}>
			<Header />
		</div>
	) : (
		<Auth />
	);
}

export default observer(App);
