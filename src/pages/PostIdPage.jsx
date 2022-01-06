import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/Ui/Loader/Loader";

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [fetchPostsById, isLoading, error] = useFetching(async () => {
		const responce = await PostService.getById(params.id)
		setPost(responce.data)
	})

	useEffect(() => {
		fetchPostsById()
	}, [])

	return (
		<div>
			<h1>
				Страница поста id {params.id}
			</h1>
			{isLoading
				? <Loader/>
				: <div>{post.id}. {post.title}</div>
			}
		</div>
	);
};

export default PostIdPage;
