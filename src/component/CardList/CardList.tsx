import React from 'react';
import { TCard } from '../../data/data';
import Card from '../Card/Card';

const CardList = (props: { data: TCard[] }) => {

	const array = props.data;

	return (
		<div className="card-list__wrapper">
			<h2 className='hero-title'>Ты сегодня покормил кота?</h2>
			<div className="card-list">
				{array.map(item => <Card key={(100 * Math.random()).toString()} {...item} />)}
			</div>
		</div>
	)
}

export default CardList;