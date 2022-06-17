const BRAND = 'Нямушка';
const BONUS = [
	'10 порций мышь\n' + 'в подарок',
	'40 порций 2 мыши в подарок',
	'100 порций 5 мышей в подарок заказчик доволен',
] as const;
const WEIGHT = ['0,5', '2', '5'];
const TASTE = ['с фуа-гра', 'с рыбой', 'с курой'];

type TBonus = typeof BONUS[number];
type TTaste = typeof TASTE[number];
type TWeight = typeof WEIGHT[number];
export type TDescription = 'Сказочное заморское яство' | 'Котэ не одобряет?';

export interface TCard {
	brand: typeof BRAND
	taste: TTaste
	weight: TWeight
	bonus: TBonus
	description: TDescription
}

export const data: TCard = {
	brand: BRAND,
	taste: 'с курой',
	weight: '0,5',
	bonus: BONUS[2],
	description: 'Сказочное заморское яство',
}

export const FakeData: TCard[] = [];

for (let i = 0; i < 3; i++) {
	FakeData.push({
		brand: BRAND,
		taste: TASTE[i],
		weight: WEIGHT[i],
		bonus: BONUS[i],
		description: 'Сказочное заморское яство',
	});
}