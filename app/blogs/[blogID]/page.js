import React from "react";

export async function generateMetadata({ params }) {
	const { blogID } = await params;
	return {
		title: `Blog ${blogID}`,
	};
}

export default async function page({ params }) {
	// console.log(await params);
	const { blogID } = await params;
	return (
		<div>
			Blog <b> {blogID}</b>
		</div>
	);
}
