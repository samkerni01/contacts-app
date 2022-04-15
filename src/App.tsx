import { observer } from 'mobx-react-lite';

import auth from './store/auth';

import SignIn from './components/SignIn/SignIn';

import './styles/globals.css';

function App() {
	return auth.passed ? <div>Hello</div> : <SignIn />;
}

export default observer(App);
