import { observer } from 'mobx-react-lite';

import AddContact from '../AddContact/AddContact';
import Search from '../Search/Search';

import UiStore from '../../stores/UiStore';

import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as AddIcon } from './icons/add.svg';

import styles from './AppHeader.module.css';

function AppHeader() {
	return (
		<header className={styles.wrapper}>
			<h1 className={styles.title}>Contact list</h1>

			{UiStore.form ? (
				<AddContact />
			) : UiStore.search ? (
				<Search />
			) : (
				<>
					<AddIcon
						className={styles.icon}
						onClick={() => UiStore.setForm()}
					/>

					<SearchIcon
						className={styles.icon}
						onClick={() => UiStore.setSearch()}
					/>
				</>
			)}
		</header>
	);
}

export default observer(AppHeader);
