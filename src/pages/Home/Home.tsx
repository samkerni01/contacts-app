import { observer } from 'mobx-react-lite';

import Header from '../../components/Header/Header';
import ContactList from '../../components/ContactList/ContactList';

import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.wrapper}>
			<Header />

			<main>
				<ContactList />
			</main>
		</div>
	);
}

export default observer(Home);
