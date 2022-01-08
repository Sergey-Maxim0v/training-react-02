import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/Ui/Loader/Loader";

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostsById, isLoading, error] = useFetching(async () => {
		const responce = await PostService.getById(params.id)
		setPost(responce.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const responce = await PostService.getCommentsByPostId(params.id)
		setComments(responce.data)
	})

	useEffect(() => {
		fetchPostsById()
		fetchComments()
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
			<h2>Комментарии</h2>
			{isComLoading
				? <Loader/>
				: <div>
					{comments.map(comment =>
						<div key={comment.id} style={{marginTop: '15px'}}>
							<h5>{comment.email}</h5>
							<p>{comment.body}</p>
						</div>
					)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;
