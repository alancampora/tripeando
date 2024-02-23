import { getCityData } from '../../helpers';
import { Place, ChatgptRecommendation, ChatgptPlace } from '../../types';

export default async function City({ params }: { params: { id: string } }) {
	const cityData: Place | undefined = await getCityData(params.id);
	return (
		<div>
			<p>test</p>
			<h1>{cityData?.country}</h1>
		</div>
	);
}
