import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {Route} from "react-router-dom";
import React from "react";

export const privateRoutes =
	<React.Fragment key={'privateRoutes'}>
		<Route path="/about" element={<About/>}/>
		<Route path="/posts" element={<Posts/>}/>
		<Route path="/posts/:id" element={<PostIdPage/>}/>
		<Route path="/error" element={<Error/>}/>
		<Route path="/login" element={<Login/>}/>
	</React.Fragment>
	// [
	// 	{path: '/about', component: About, exact: true},
	// 	{path: '/posts', component: Posts, exact: true},
	// 	{path: '/posts/:id', component: PostIdPage, exact: true},
	// 	{path: '/error', component: Error, exact: true},
	// ]

export const publicRoutes = [
	<React.Fragment key={'publicRoutes'}>
		<Route path="/login" element={<Login/>}/>
	</React.Fragment>]
