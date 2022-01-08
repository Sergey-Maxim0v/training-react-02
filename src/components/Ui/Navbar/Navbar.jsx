import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/context";
import MyButton from "../Button/MyButton";

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		<div className={'navbar'}>
			<MyButton
				children='Выйти'
				onClick={logout}
			/>
			<div className="navbar__links">
				<Link to='/about' children={'О сайте'}/>
				<Link to='/posts' children={'Посты'}/>
			</div>
		</div>
	);
};

export default Navbar;
