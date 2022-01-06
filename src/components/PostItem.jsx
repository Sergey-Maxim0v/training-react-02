import React from 'react';
import MyButton from "./Ui/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
	const navigate = useNavigate()
	function navigateToId (id){
		navigate(`${id}`)
	}

	return (
		<div className={'post'}>
			<div className={'post__content'}>
				<strong>{props.post.id}{'. '}{props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className={'post__btns'}>
				<MyButton
					onClick={() => navigateToId(props.post.id)}
					children={'Открыть'}
				/>
				<MyButton
					onClick={() => props.remove(props.post)}
					children={'Удалить'}
				/>
			</div>
		</div>
	);
};

export default PostItem;
