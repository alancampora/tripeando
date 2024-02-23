import axios from 'axios';
import Papa from 'papaparse';
import { Place, ChatgptRecommendation, ChatgptPlace } from '../types';

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
