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
			<header className="header-bc">
				<div className="header">
					<div className="header-logo">
						<h1 className="header-title">Tripeando</h1>
						<p className="header-subtitle">con los moshos!</p>
					</div>
					<div className="header-img">
						<img className="header-img-photo" src="/assets/moshos-foto.jpeg" />
					</div>
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
