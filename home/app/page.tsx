import Link from 'next/link';
import { ubuntu400, ubuntuBold } from '@tripeando/fonts';
import { getAllPlaces, getPexelPhoto } from './helpers';
import { Place, ChatgptPlace } from './types';
import ChatgptRecommendation from './ui/chatgtp-recommendation';

async function getPhoto(query: string, size: string) {
	return await getPexelPhoto(query, size);
}

export default async function Main() {
	const data: Array<Place> = await getAllPlaces();

	console.log({ data });

	return (
		<main>
			<header className="header">
				<img
					className="header-photo"
					src="/assets/hand-drawn-travel-background.jpg"
				/>
				<div className="header-text">
					<h1 className={ubuntu400.className}>Tripeando</h1>
					<h1 className={ubuntu400.className}>El viaje de los moshos</h1>
				</div>
			</header>
			<section className="grid">
				{await Promise.all(
					data.map(async (place: Place, index: number) => {
						const photo = await getPhoto(place.city, 'portrait');

						return (
							<article key={index} className="place">
								<img className="grid-img" src={photo} />
								<h2>{`${place.country} - ${place.city}`}</h2>
								<h3>{`${place.arrivalDate} (${place.arrivalDay})`}</h3>
								<p>{place.description}</p>
								<p>{place.transfer}</p>
								<Link href={`city/${place.city.toLowerCase()}`}>
									Ver detalles
								</Link>
							</article>
						);
					}),
				)}
			</section>
		</main>
	);
}
