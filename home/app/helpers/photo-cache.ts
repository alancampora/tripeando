interface Src {
	original: string;
	large2x: string;
	large: string;
	medium: string;
	small: string;
	portrait: string;
	landscape: string;
	tiny: string;
}

interface CityPhotoInfo {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	avg_color: string;
	src: Src;
	liked: boolean;
	alt: string;
}

interface CityPhotoData {
	[key: string]: CityPhotoInfo;
}

export function getCityPhotoInfo(key: string): CityPhotoInfo | null {
	return cityData[key as keyof CityPhotoData];
}

export function getCityPhotoSize(
	key: string,
	size: string,
): string | undefined {
	const keyLower = key.toLowerCase();
	const info = getCityPhotoInfo(keyLower);

	const result = info?.src[size as keyof Src];

	return result;
}

const cityData: CityPhotoData = {
	madrid: {
		id: 670261,
		width: 3938,
		height: 3024,
		url: 'https://www.pexels.com/photo/architectural-photography-of-metropolis-under-stratus-clouds-670261/',
		photographer: 'Abhishek Verma',
		photographer_url: 'https://www.pexels.com/@abhishek-verma-209130',
		photographer_id: 209130,
		avg_color: '#456F8D',
		src: {
			original:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg',
			large2x:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/670261/pexels-photo-670261.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Architectural Photography Of Metropolis Under Stratus Clouds',
	},
	frankfurt: {
		id: 1124460,
		width: 4092,
		height: 2728,
		url: 'https://www.pexels.com/photo/body-of-water-near-trees-1124460/',
		photographer: 'Tembela Bohle',
		photographer_url: 'https://www.pexels.com/@bohlemedia',
		photographer_id: 326366,
		avg_color: '#A0B1B8',
		src: {
			original:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg',
			large2x:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Body of Water Near Trees',
	},
	heidelberg: {
		id: 15263843,
		width: 6000,
		height: 4000,
		url: 'https://www.pexels.com/photo/townhouse-facades-and-fortification-15263843/',
		photographer: 'Elona Agug',
		photographer_url: 'https://www.pexels.com/@elona-agug-206546525',
		photographer_id: 206546525,
		avg_color: '#656C72',
		src: {
			original:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg',
			large2x:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/15263843/pexels-photo-15263843.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Heidelberg',
	},
	munich: {
		id: 163405,
		width: 5906,
		height: 2946,
		url: 'https://www.pexels.com/photo/white-tower-beside-the-river-163405/',
		photographer: 'Pixabay',
		photographer_url: 'https://www.pexels.com/@pixabay',
		photographer_id: 2659,
		avg_color: '#89837A',
		src: {
			original:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg',
			large2x:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/163405/munich-olympia-mountain-olympic-stadium-view-163405.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'White Tower Beside the River',
	},
	innsbruck: {
		id: 6128192,
		width: 4912,
		height: 7360,
		url: 'https://www.pexels.com/photo/parked-bicycles-on-metal-fence-6128192/',
		photographer: 'Alesia  Kozik',
		photographer_url: 'https://www.pexels.com/@alesiakozik',
		photographer_id: 5767085,
		avg_color: '#817C77',
		src: {
			original:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg',
			large2x:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/6128192/pexels-photo-6128192.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Parked Bicycles on Metal Fence',
	},
	verona: {
		id: 1498843,
		width: 3632,
		height: 5456,
		url: 'https://www.pexels.com/photo/yellow-sedan-on-road-while-people-walking-on-sidewalk-1498843/',
		photographer: 'Melissa Thomas',
		photographer_url: 'https://www.pexels.com/@spiritsofmilly',
		photographer_id: 679902,
		avg_color: '#525455',
		src: {
			original:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg',
			large2x:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/1498843/pexels-photo-1498843.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Yellow Sedan on Road While People Walking on Sidewalk',
	},
	venecia: {
		id: 18969581,
		width: 4898,
		height: 3265,
		url: 'https://www.pexels.com/photo/canal-grande-and-santa-maria-della-salute-in-venecia-italy-18969581/',
		photographer: 'Jacek Jan Skorupski',
		photographer_url: 'https://www.pexels.com/@jjskorupski',
		photographer_id: 2764192,
		avg_color: '#6B7E7A',
		src: {
			original:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg',
			large2x:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/18969581/pexels-photo-18969581.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Canal Grande and Santa Maria della Salute in Venecia, Italy',
	},
	roma: {
		id: 532263,
		width: 3264,
		height: 1836,
		url: 'https://www.pexels.com/photo/the-colosseum-rome-532263/',
		photographer: 'Pixabay',
		photographer_url: 'https://www.pexels.com/@pixabay',
		photographer_id: 2659,
		avg_color: '#717D80',
		src: {
			original:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg',
			large2x:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'The Colosseum, Rome',
	},
	paris: {
		id: 2346181,
		width: 6000,
		height: 4000,
		url: 'https://www.pexels.com/photo/empty-road-2346181/',
		photographer: 'Tom Fisk',
		photographer_url: 'https://www.pexels.com/@tomfisk',
		photographer_id: 106344,
		avg_color: '#B6B0AC',
		src: {
			original:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg',
			large2x:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/2346181/pexels-photo-2346181.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Empty Road',
	},
	firenze: {
		id: 15316227,
		width: 3389,
		height: 5083,
		url: 'https://www.pexels.com/photo/view-of-the-dome-of-the-cathedral-of-santa-maria-del-fiore-from-an-alley-between-buildings-florence-italy-15316227/',
		photographer: 'Sabina Kallari',
		photographer_url: 'https://www.pexels.com/@sabinakallari',
		photographer_id: 170427453,
		avg_color: '#514843',
		src: {
			original:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg',
			large2x:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/15316227/pexels-photo-15316227.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'A street with buildings and a dome in the background',
	},
	barcelona: {
		id: 1388030,
		width: 6109,
		height: 4073,
		url: 'https://www.pexels.com/photo/aerial-photography-of-city-1388030/',
		photographer: 'Aleksandar Pasaric',
		photographer_url: 'https://www.pexels.com/@apasaric',
		photographer_id: 105079,
		avg_color: '#B79775',
		src: {
			original:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
			large2x:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			large:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
			medium:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&h=350',
			small:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&h=130',
			portrait:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
			landscape:
				'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
			tiny: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		},
		liked: false,
		alt: 'Aerial Photography Of City ',
	},
};
