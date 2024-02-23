import {
	Place,
	ChatgptRecommendation as Recommendation,
	ChatgptPlace,
} from '../types';

function getRecommendation(rec: any) {
	const temp: any = rec;
	return JSON.parse(rec) as Array<Recommendation>;
}

export default function ChatgptRecommendation({ data }: { data: any }) {
	return (
		<article>
			{getRecommendation(data).map((days: Recommendation, index: number) => {
				return (
					<div key={index}>
						<h3>{days.dayKey}</h3>
						{days.places.map((p: ChatgptPlace, index: number) => {
							return (
								<div key={index}>
									<a href={p.googleLink}>{p.name}</a>
									<p>{p.description}</p>{' '}
								</div>
							);
						})}
					</div>
				);
			})}
		</article>
	);
}
