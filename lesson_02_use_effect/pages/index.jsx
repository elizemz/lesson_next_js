import React from "react";
import Link from "next/link";

export default function Home({ blogs }) {
	return (
		<main className={`container mx-auto`}>
			<h2 className="blog">All Blog posts</h2>
			<section className="whole">
				<div className="grid grid-cols-3 gap-3 justify-center">
					{blogs.map((blog) => (
						<Link href={"/blog/" + blog.id}>
							<div className="card">
								<img
									src={
										blog.cover_image
											? blog.cover_image
											: "https://res.cloudinary.com/practicaldev/image/fetch/s--rcd8mse6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dc215rxksweory92o7as.png"
									}
									className="img"
								/>
								<div lcassName="bottom">
									<span className="tech">Technology</span>
									<h2 className="titl">{blog.title}</h2>
								</div>
								<div className="foot">
									<img src={blog.user.profile_image} className="blud" />
									<p className="name">{blog.user.name}</p>
									<p className="date">{blog.readable_publish_date}, 2023</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
			<div className="load">Load More</div>
		</main>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://dev.to/api/articles?per_page=12");
	const blogs = await res.json();
	console.log("RES", blogs);

	return {
		props: {
			blogs,
		},
	};
}
