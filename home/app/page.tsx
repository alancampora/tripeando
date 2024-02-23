import Link from 'next/link';
import { ubuntu400, ubuntuBold } from '@tripeando/fonts';
import { getAllPlaces } from './helpers';
import { Place, ChatgptPlace } from './types';
import ChatgptRecommendation from './ui/chatgtp-recommendation';

export default async function Main() {
	const data: Array<Place> = await getAllPlaces();

	console.log({ data });

	return (
		<main>
			<header className="header">
				<h1 className={ubuntu400.className}>Tripeando</h1>
				<h1 className={ubuntu400.className}>El viaje de los moshos</h1>
			</header>
			<section>
				{data.map((place: Place, index: number) => {
					return (
						<article key={index} className="place">
							<h2>{`${place.country} - ${place.city}`}</h2>
							<h3>{`${place.arrivalDate} (${place.arrivalDay})`}</h3>
							<p>{place.description}</p>
							<p>{place.transfer}</p>
							<Link href={`city/${place.city.toLowerCase()}`}>
								Ver detalles
							</Link>
						</article>
					);
				})}
			</section>
		</main>
	);
}
