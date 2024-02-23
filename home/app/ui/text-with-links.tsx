import React from 'react';

const TextWithLinks = ({ text }) => {
	// Regular expression to detect links in the text
	const urlRegex = /(https?:\/\/[^\s]+)/g;

	// Function to detect and render links
	const renderTextWithLinks = () => {
		// Split the text into parts, separated by detected links
		const parts = text.split(urlRegex);

		return parts.map((part, index) => {
			// If the current part is a link, render it as an <a> tag
			if (part.match(urlRegex)) {
				return (
					<a key={index} href={part} target="_blank" rel="noopener noreferrer">
						{part}
					</a>
				);
			} else {
				return part;
			}
		});
	};

	return <p>{renderTextWithLinks()}</p>;
};

export default TextWithLinks;
