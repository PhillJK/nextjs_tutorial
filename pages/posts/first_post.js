import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post!</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a className="link">Back to home</a>
				</Link>
			</h2>
			{/* <style jsx>{`
				.main {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					width: 30%;
					height: 40%;
					border: 1px solid #eaeaea;
					border-radius: 15px;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}

				.main:hover {
					border-color: #0070f3;
				}

				.link {
					color: #0070f3;
				}

				.link:hover {
					text-decoration: underline;
				}
			`}</style> */}
		</Layout>
	);
}
