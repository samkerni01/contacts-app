import { observer } from 'mobx-react-lite';

import AppHeader from '../AppHeader/AppHeader';
import Auth from '../Auth/Auth';
import ContactList from '../ContactList/ContactList';

import AuthStore from '../../stores/AuthStore';

import styles from './App.module.css';
import '../../styles/globals.css';

function App() {
	return AuthStore.passed ? (
		<div className={styles.wrapper}>
			<AppHeader />

			<main>
				<ContactList />
			</main>
		</div>
	) : (
		<Auth />
	);
}

export default observer(App);
