import React, {useEffect, useRef, useState} from "react";
import styles from '../styles/app.css'
import PostList from "../components/PostList";
import MyButton from "../components/Ui/Button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/Ui/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/Ui/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/Ui/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/Ui/Select/MySelect";

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()

	const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [limit, page])

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

			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue='Количество элементов на странице'
				options={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: -1, name: 'Показать все'},
				]}
			/>

			{postsError &&
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px'}}>
					<h1>Ошибка загрузки постов</h1>
					<p style={{margin: '20px'}}>${postsError}</p>
				</div>
			}

			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Список постов 1'}
			/>

			<div
				ref={lastElement}
				style={{height: '5px', background: 'lightgray'}}
			/>

			{isPostsLoading &&
				<div style={{display: 'flex', justifyContent: 'center', margin: '50px'}}>
					<Loader/>
				</div>
			}

			{/*<Pagination*/}
			{/*	totalPages={totalPages}*/}
			{/*	page={page}*/}
			{/*	changePage={changePage}*/}
			{/*/>*/}
		</div>
	);
}

export default Posts;
