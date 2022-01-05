import React from 'react';
import styles from './MyButton.module.css'

const MyButton = ({children, customStyle, ...props}) => {
	return (
		<button
			{...props}
			className={`${styles.myBtn} ${customStyle}`}
		>
			{children}
		</button>
	);
};

export default MyButton;
