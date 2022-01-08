import React, {useContext} from 'react';
import MyInput from "../components/Ui/Input/MyInput";
import MyButton from "../components/Ui/Button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
	const {setIsAuth} = useContext(AuthContext)

	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}

	return (
		<div>
			<h1>Страница для логина</h1>
			<form
				onSubmit={login}
			>
				<MyInput type='text' placeholder='Введите логин'/>
				<MyInput type='password' placeholder='Введите пароль'/>
				<MyButton
					children='Войти'
				/>

			</form>
		</div>
	);
};

export default Login;
