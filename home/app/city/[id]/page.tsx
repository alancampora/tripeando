import { getCityData, getPexelPhoto } from '../../helpers';
import TextWithLinks from '../../ui/text-with-links';
import { Place, ChatgptPlace } from '../../types';
import ChatgptRecommendation from '../../ui/chatgtp-recommendation';

export default async function City({ params }: { params: { id: string } }) {
	const cityData: Place | undefined = await getCityData(params.id);
	const photoSrc = await getPexelPhoto(params.id);
	return (
		<div>
			<header style={{ height: '200px' }}>
				<div
					style={{
						backgroundImage: `url(${photoSrc})`,
						height: '100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						position: 'relative',
					}}
				>
					<div
						className="hero-text"
						style={{
							textAlign: 'center',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: 'white',
						}}
					>
						<h1>{cityData?.city}</h1>
						<h2>{cityData?.country}</h2>
					</div>
				</div>
			</header>
			<main>
				<article className="place">
					<h3>{`${cityData.arrivalDate} (${cityData.arrivalDay})`}</h3>
					<h3>Description</h3>
					<TextWithLinks text={cityData.description} />
					<TextWithLinks text={cityData.details} />
				</article>

				<article className="place">
					<h3>🏨 Hotel </h3>
					<TextWithLinks text={cityData.hotel} />
				</article>

				<article className="place">
					<h3>🤖 GPT </h3>
					<ChatgptRecommendation data={cityData.chatgptRecommendation} />
				</article>
			</main>
		</div>
	);
}
