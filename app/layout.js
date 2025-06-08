export const metadata = {
	title: {
		template: "Technical Agency - %s",
		default: "Technical Agency",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<header style={{ background: "lightBlue" }}>Header</header>
			<body>{children}</body>
			<footer style={{ background: "pink" }}>Footer</footer>
		</html>
	);
}
