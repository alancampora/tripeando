import {
	getCityData,
	getPexelPhoto,
	getCityRecommendation,
} from '../../helpers';
import { ubuntu400, ubuntuBold } from '@tripeando/fonts';
import TextWithLinks from '../../ui/text-with-links';
import { Place, ChatgptPlace } from '../../types';
import ChatgptRecommendation from '../../ui/chatgtp-recommendation';

async function getCityRec(key: string) {
	return await getCityRecommendation(key);
}

export default async function City({ params }: { params: { id: string } }) {
	const cityData: Place | undefined = await getCityData(params.id);
	const photoSrc = await getPexelPhoto(params.id, 'portrait');
	const recommendation = await getCityRecommendation(params.id);
	return (
		<div>
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

			<main>
				<section className="sideBySide">
					<img className="sideBySide-img" src={photoSrc} />
					<div className="sideBySide-content">
						<h1>{`${cityData?.country} ${cityData?.city}`}</h1>
						<p>{recommendation?.history}</p>
					</div>
				</section>
				<section className="place">
					<h3>{`${cityData?.arrivalDate} (${cityData?.arrivalDay})`}</h3>
					<h3>Que lugares visitar ? </h3>
					<TextWithLinks text={cityData?.description} />
				</section>

				<section className="place">
					<h3>🚅 Como llegamos ? </h3>
					<TextWithLinks text={cityData?.transfer} />
				</section>

				<section className="place">
					<h3>🏨 Hotel </h3>
					<TextWithLinks text={cityData?.hotel} />
				</section>

				<section className="place">
					<h3>🤖 Recomendaciones GPT </h3>
					<ChatgptRecommendation data={recommendation?.places} />
				</section>

				{cityData?.review && (
					<section className="place">
						<h3>❤️ Nuestra Review</h3>
						<ChatgptRecommendation data={cityData.review} />
					</section>
				)}
			</main>
		</div>
	);
}
