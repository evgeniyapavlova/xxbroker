import { langCodes } from './tableData';

export const formatProfit = (profit) => '+$' + profit.toLocaleString('en-US');

export const formatTime = (time) => {
	const timeArray = time.toTimeString().split(' ')[0].split(':');
	return timeArray[0] + ':' + timeArray[1];
};

export const getTodayDate = (lang) => {
	const today = new Date();
	const day = today.getDate().toString().padStart(2, '0');
	return `${day} ${today.toLocaleDateString(langCodes[lang], { month: 'short' })}`;
};

export const getRandomTime = () => {
	const now = new Date();
	const past = new Date(now.getTime() - 5 * 60 * 1000);
	const randomTime = new Date(past.getTime() + Math.random() * (now - past));
	return formatTime(randomTime);
};

export const sortByProfit = (arr) => {
	return arr.sort((a, b) => b.profit - a.profit);
};

export const getRandomIndexes = (leaders) => {
	const indexes = [];
	while (indexes.length < 3) {
		const randIndex = Math.floor(Math.random() * leaders.length);
		if (!indexes.includes(randIndex)) {
			indexes.push(randIndex);
		}
	}
	return indexes;
};

export const randomizeForThreeRows = (data, randomIndexes) => {
	return data.map((item, index) => {
		if (randomIndexes.includes(index)) {
			return {
				...item,
				asset: Math.floor(Math.random() * 7) + 1,
				time: formatTime(new Date()),
				type: Math.random() < 0.5,
				profit: Math.floor(Math.random() * (9999 - 100 + 1)) + 100
			};
		}
		return item;
	});
};

export function getRandomCountry() {
	const random = Math.floor(Math.random() * 24);

	if (random <= 7) {
		return 0;
	} else {
		return random - 7;
	}
}
