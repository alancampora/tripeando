import { getAllPlaces } from './helpers';
import { Place, ChatgptRecommendation, ChatgptPlace } from './types';

function getRecommendation(rec: any) {
	const temp: any = rec;
	return JSON.parse(rec) as Array<ChatgptRecommendation>;
}

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

							<article>
								{getRecommendation(place.chatgptRecommendation).map(
									(days: ChatgptRecommendation, index: number) => {
										return (
											<div key={index}>
												<h3>🤖 GPT </h3>
												{days.places.map((p: ChatgptPlace, index: number) => {
													return (
														<div key={index}>
															<p>{p.name}</p>
															<p>{p.description}</p>{' '}
															<a href={p.googleLink}>google link</a>
														</div>
													);
												})}
											</div>
										);
									},
								)}
							</article>
						</article>
					);
				})}
			</section>
		</main>
	);
}
