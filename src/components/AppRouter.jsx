import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {publicRoutes, privateRoutes} from "../router/router";

const AppRouter = () => {
	return (
		<Routes>
			{privateRoutes}
			{publicRoutes}
			{/*{router.map(route =>*/}
			{/*	<Route*/}
			{/*		path={route.path}*/}
			{/*		element={route.component}*/}
			{/*		exact={route.exact}*/}
			{/*		key={route.path}*/}
			{/*	/>*/}
			{/*)}*/}
			{/*<Route path="/about" element={<About/>}/>*/}
			{/*<Route path="/posts" element={<Posts/>}/>*/}
			{/*<Route path="/posts/:id" element={<PostIdPage/>}/>*/}
			{/*<Route path="/error" element={<Error/>}/>*/}
			{/*<Route path="/login" element={<Login/>}/>*/}
			<Route path="*" element={<Navigate to="/posts" replace/>}/>
		</Routes>
	);
};

export default AppRouter;
