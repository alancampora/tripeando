import axios from 'axios';
import Papa from 'papaparse';
import { createClient } from 'pexels';
import { Place, ChatgptRecommendation, ChatgptPlace } from '../types';
import { getCityPhotoSize } from './photo-cache';
import { getCityRecommendationInfo } from './city-cache';

export async function getDataFromGdocs(spreadSheetUrl: string): Promise<any> {
	console.log({ spreadSheetUrl });
	return axios
		.get(spreadSheetUrl, {
			responseType: 'blob',
		})
		.then((response: any) => {
			return new Promise((res) => {
				Papa.parse(response.data, {
					header: true,
					complete: (results) => {
						res(results.data);
					},
				});
			});
		});
}

export async function getAllPlaces(): Promise<Array<Place>> {
	const url =
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDKkVSHQsgkl5J8ULRdvnIUX_VGhppt-k8ZD9S9GfStZRP-23PQ8MMvArXNJbtGJ31N0nDf9Y1pi21/pub?gid=537873213&single=true&output=csv';

	return await getDataFromGdocs(url);
}

export async function getCityData(
	cityName: string,
): Promise<Place | undefined> {
	const url =
		'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDKkVSHQsgkl5J8ULRdvnIUX_VGhppt-k8ZD9S9GfStZRP-23PQ8MMvArXNJbtGJ31N0nDf9Y1pi21/pub?gid=537873213&single=true&output=csv';

	const parsedData: Array<Place> = await getDataFromGdocs(url);

	const cityData: Place | undefined = parsedData.find(
		(place: Place) => place.city.toLowerCase() === cityName,
	);

	return cityData;
}

export async function getCityRecommendation(key: string) {
	return await getCityRecommendationInfo(key);
}

export async function getPexelPhoto(query: string, size: string) {
	const photoFromCache = getCityPhotoSize(query, size);

	if (photoFromCache) return photoFromCache;

	const client = createClient(process.env.PEXEL_KEY || '');

	const photo: any = await client.photos.search({
		query,
		per_page: 1,
	});

	const landscape = photo.photos[0]?.src.large2x;

	console.log(`${query}:${JSON.stringify(photo.photos[0])}`);

	return landscape;
}
