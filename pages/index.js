import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
	const [name, setName] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/api/hello")
			.then(response => response.json())
			.then(data => setName(data.name))
			.catch(console.error);
	}, []);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headignLg}>Blog Post</h2>
				{name && <h2 className={utilStyles.headingMd}>{name}</h2>}
				<ul className={utilStyles.list}>
					{allPostsData.map(({ title, id, date }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}
