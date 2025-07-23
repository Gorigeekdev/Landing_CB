import React from 'react';
import { fetchCB } from '../../helpers/global.helpers';

export type HomeScreenProps = {
	// types...
}

const HomeScreen: React.FC<HomeScreenProps>  = ({}) => {

	// async function handleClick() {
	// 	let data = {
	// 		'data1' : 'colochotester123@gmail.com',
	// 		'data2' : 'romeo123',
	// 		'data3' : false
	// 	};

	// 	const onCliked = await fetchCB('session', data, 'POST');

	// 	console.log(onCliked);
	// }

	return (
		<div>
 			HomeScreen works!
 		</div>
	);
};

export default HomeScreen;
