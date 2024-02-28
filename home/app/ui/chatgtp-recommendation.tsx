import {
	Place,
	ChatgptRecommendation as Recommendation,
	ChatgptPlace,
} from '../types';

export default function ChatgptRecommendation({ data = [] }: { data: any }) {
	return (
		<article>
			{data.map((place: ChatgptPlace, index: number) => {
				return (
					<div key={index}>
						<div key={index}>
							<a target="_blank" href={place.googleLink}>
								{place.name}
							</a>
							<p>{place.description}</p>{' '}
						</div>
					</div>
				);
			})}
		</article>
	);
}
