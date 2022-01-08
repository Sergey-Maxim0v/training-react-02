import React, {useContext} from 'react';
import {Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/router";
import {AuthContext} from "../context/context";
import Loader from "./Ui/Loader/Loader";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext)

	if (isLoading) {
		return <Loader/>
	}

	return (
		<Routes>
			{isAuth
				? privateRoutes
				: publicRoutes
			}
		</Routes>
	);
};

export default AppRouter;
