import { observer } from 'mobx-react-lite';

import Form from '../Form/Form';

import header from '../../stores/header';

import search from './icons/search.svg';
import add from './icons/add.svg';

import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Contact list</h1>

			{header.showForm ? (
				<Form />
			) : (
				<>
					<img
						className={styles.icon}
						src={add}
						alt="add"
						onClick={() => header.setShowForm()}
					/>

					<img className={styles.icon} src={search} alt="search" />
				</>
			)}
		</div>
	);
}

export default observer(Header);
