import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<div className={'navbar'}>
			<div className="navbar__links">
				<Link to='/about' children={'О сайте'}/>
				<Link to='/posts' children={'Посты'}/>
			</div>
		</div>
	);
};

export default Navbar;
