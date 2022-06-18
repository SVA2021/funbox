import { TDetailed, TTaste } from "../../data/data";

export const DetailsDefault = (props: { handleClick: React.MouseEventHandler }) => {
	const handleClick = props.handleClick;
	return (
		<p className='card__detailed'>Чего сидишь? Порадуй котэ,&nbsp;
			<span className='detailed__link' onClick={handleClick}>купи.</span>
		</p>
	);
}

export const DetailsSelected = (props: { detailed: TDetailed }) => {
	return (
		<p className='card__detailed card__detailed--selected'>
			{props.detailed}
		</p>
	);
}

export const DetailsDisabled = (props: { taste: TTaste }) => {
	return (
		<p className='card__detailed'>
			Печалька, {props.taste} закончился.
		</p>
	);
}