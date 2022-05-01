import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import LoginStore from './stores/LoginStore';

import './styles/globals.css';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		if (LoginStore.passed) {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [LoginStore.passed]);

	return (
		<Routes>
			<Route
				path="/"
				element={
					LoginStore.passed ? (
						<Home />
					) : (
						<Navigate to="login" replace />
					)
				}
			/>

			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default observer(App);
