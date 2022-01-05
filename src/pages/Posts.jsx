import React, {useEffect, useMemo, useState} from "react";
import Counter from "../components/Counter";
import Input from "../components/Input";
import ClassCounter from "../components/ClassCounter";
import styles from '../styles/app.css'
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import MyButton from "../components/Ui/Button/MyButton";
import MyInput from "../components/Ui/Input/MyInput";
import PostForm from "../components/PostForm";
import MySelect from "../components/Ui/Select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/Ui/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import axios from "axios";
import PostService from "../API/PostService";
import Loader from "../components/Ui/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesArray, getPagesCount} from "../utils/pages";
import Pagination from "../components/Ui/Pagination/Pagination";

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts()
	}, [page])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className="App">
			<MyButton
				style={{marginTop: '30px'}}
				onClick={() => setModal(true)}
				children={'Создать пост'}
			/>
			<MyModal
				visible={modal}
				setVisible={setModal}
			>
				<PostForm create={createPost}/>
			</MyModal>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{postsError &&
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px'}}>
					<h1>Ошибка загрузки постов</h1>
					<p style={{margin: '20px'}}>${postsError}</p>
				</div>
			}
			{isPostsLoading
				? <div style={{display: 'flex', justifyContent: 'center', margin: '50px'}}>
					<Loader/>
				</div>
				: <PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title={'Список постов 1'}
				/>
			}
			<Pagination
				totalPages={totalPages}
				page={page}
				changePage={changePage}
			/>
		</div>
	);
}

export default Posts;
