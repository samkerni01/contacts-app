import { observer } from 'mobx-react-lite';

import Add from '../Add/Add';
import Search from '../Search/Search';

import UiStore from '../../stores/UiStore';

import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as AddIcon } from './icons/add.svg';

import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.wrapper}>
			<h1 className={styles.title}>Contact list</h1>

			{UiStore.form ? (
				<Add />
			) : UiStore.search ? (
				<Search />
			) : (
				<>
					<AddIcon
						className={styles.icon}
						onClick={() => UiStore.toggleForm()}
					/>

					<SearchIcon
						className={styles.icon}
						onClick={() => UiStore.toggleSearch()}
					/>
				</>
			)}
		</header>
	);
}

export default observer(Header);
