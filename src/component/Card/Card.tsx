import { useState } from 'react';
import { TCard, TDescription } from '../../data/data';
import { ReactComponent as Back } from '../../img/Back.svg';
import { ReactComponent as Border } from '../../img/Border.svg';
import { DetailsDefault, DetailsDisabled, DetailsSelected } from '../Details/Details';

const Card = (props: TCard) => {

	const { brand, taste, weight, bonus, qty, disabled, detailed } = props;
	const [selected, setSelected] = useState(false);
	const [hovered, setHovered] = useState(false);

	const description: TDescription = (selected && hovered) ? 'Котэ не одобряет?' : 'Сказочное заморское яство';

	const handleClick = (isSelect: boolean) => {
		return (event: React.MouseEvent) => setSelected(!isSelect);
	}

	const handleMouseEnter = () => {
		if (selected) setHovered(true);
	}

	const handleMouseLeave = () => {
		setHovered(false);
	}

	let setCardStatus = () => {
		if (disabled) return 'card--disabled';
		if (selected && hovered) return 'card--selected__hovered';
		if (selected) return 'card--selected';
		return 'card--default';
	};

	let cardStatus = setCardStatus();

	return (
		<div className={`card ${cardStatus}`}
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
		>
			<div className="card__wrapper" onClick={handleClick(selected)}>
				<Back className='card__back' />
				<div className="card__content">
					<p className='card__description'>{description}</p>
					<p className='card__brand'>{brand}</p>
					<p className='card__taste'>{taste}</p>
					<p className='card__caption'>
						<span>{qty} порций</span><br />
						<span>{bonus}</span>
					</p>
					<p className='card__weight'>{weight}
						<br /><sub className='weight__unit'>кг</sub>
					</p>
				</div>
				<Border className='card__border' />
			</div>
			{(disabled)
				? <DetailsDisabled taste={taste} />
				: (selected)
					? <DetailsSelected detailed={detailed} />
					: <DetailsDefault handleClick={handleClick(selected)} />}
		</div>
	)
}

export default Card;