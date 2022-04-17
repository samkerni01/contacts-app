import { observer } from 'mobx-react-lite';

import Form from '../Form/Form';
import Search from '../Search/Search';

import header from '../../stores/header';

import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as AddIcon } from './icons/add.svg';

import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Contact list</h1>

			{header.displayForm ? (
				<Form />
			) : (
				<>
					{header.displaySearch ? (
						<>
							<Search />
						</>
					) : (
						<>
							<AddIcon onClick={() => header.setDisplayForm()} />

							<SearchIcon
								onClick={() => header.setDisplaySearch()}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default observer(Header);
