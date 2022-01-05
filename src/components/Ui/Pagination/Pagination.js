import React from 'react';
import MyButton from "../Button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div className={'page__wrapper'}>
			{pagesArray.map(p =>
				<MyButton
					onClick={() => changePage(p)}
					key={p}
					children={p}
					customStyle={page === p ? 'page__current page ' : 'page'}
				/>
			)}
		</div>
	);
};

export default Pagination;
