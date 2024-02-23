import { getAllPlaces } from './helpers';
import { Place, ChatgptPlace } from './types';
import ChatgptRecommendation from './ui/chatgtp-recommendation';

export default async function Main() {
	const data: Array<Place> = await getAllPlaces();

	console.log({ data });

	return (
		<main>
			<header className="header">
				<h1>Tripeando</h1>
				<p>El viaje de los moshos</p>
			</header>
			<section>
				{data.map((place: Place, index: number) => {
					return (
						<article key={index} className="place">
							<h2>{`${place.country} - ${place.city}`}</h2>
							<h3>{`${place.arrivalDate} (${place.arrivalDay})`}</h3>
							<p>{place.description}</p>
							<p>{place.details}</p>
							<ChatgptRecommendation data={place.chatgptRecommendation} />
						</article>
					);
				})}
			</section>
		</main>
	);
}
