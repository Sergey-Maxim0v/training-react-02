import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
	return (
		<select
			className={'select__select'}
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option
				disabled value=''
				className={'select__option'}
			>
				{defaultValue}
			</option>
			{options.map(option =>
				<option
					key={option.value}
					value={option.value}
				>
					{option.name}
				</option>
			)}
		</select>
	);
};

export default MySelect;
