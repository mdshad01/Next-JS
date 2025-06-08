import Link from "next/link";

export default async function Home({ params, searchParams }) {
	// console.log(await params);
	// console.log(await searchParams);
	// console.log("Hello Next JS");
	return (
		<>
			<h1>Technical Agency </h1>
			<Link href="/blogs">Blogs</Link>
			<br />
			<br />
			<Link href="/about">About</Link>
			<br />
			<br />
			<Link href="/services">Services</Link>
			<br />
			<br />
			<Link href="/files">Files</Link>
		</>
	);
}
