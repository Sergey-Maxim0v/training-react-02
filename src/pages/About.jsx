import React from 'react';

const About = () => {
	return (
		<div>
			<h1>
				Тренировочный проект по React
			</h1>
			<hr/>
			<div>
				<a
					href='https://youtu.be/GNrdg3PzpJQ'
					target='_blank'
					children={'видеокурс youtube: \'Ulbi TV\''}
				/>
			</div>
			<div>
				<a
					href='https://jsonplaceholder.typicode.com/'
					target='_blank'
					children={'источник постов: jsonplaceholder.typicode.com'}
				/>
			</div>
		</div>
	);
};

export default About;
