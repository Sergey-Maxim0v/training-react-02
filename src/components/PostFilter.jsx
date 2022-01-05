import React from 'react';
import MyInput from "./Ui/Input/MyInput";
import MySelect from "./Ui/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder='Поиск...'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				options={[{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]}
				defaultValue={'Сортировка по'}
			/>
		</div>
	);
};

export default PostFilter;
