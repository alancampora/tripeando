export type ChatgptPlace = {
	name: string;
	description: string;
	googleLink: string;
	photoLink: string;
};

export type ChatgptRecommendation = {
	dayKey: string;
	places: Array<ChatgptPlace>;
};

export type Place = {
	country: string;
	city: string;
	description: string;
	transfer: string;
	details: string;
	amountOfDays: string;
	arrivalDate: string;
	arrivalDay: string;
	chatgptRecommendation: Array<ChatgptRecommendation>;
	hotel: string;
	review: string;
};
