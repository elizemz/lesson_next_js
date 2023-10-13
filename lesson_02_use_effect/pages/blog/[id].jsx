import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/functions";

const BlogDetail = () => {
	const router = useRouter();
	const { id } = router.query;

	const [blogDetailData, setDetailData] = useState();

	console.log("Router", id);

	const getBlogDetail = async () => {
		const res = await fetch(`https://dev.to/api/articles/${id}`);
		const data = await res.json();
		console.log("Data", data);
		setDetailData(data);
	};

	useEffect(() => {
		getBlogDetail();
	}, []);

	return (
		<div className="blevery">
			<div>
				{blogDetailData ? (
					<>
						<div className={`container mx-auto`}>
							<h1 className="blogtitle">{blogDetailData.title}</h1>
							<div className="flex items-center mt-5 gap-5">
								<div className="bloguserinfo">
									<img
										className="w-8 h-8 rounded-full"
										src={blogDetailData.user.profile_image}
										alt="avatar"
									/>
									<h4 className="blogname">{blogDetailData.user.name}</h4>
								</div>
								<p className="text-lg text-gray-500">
									{formatDate(blogDetailData.created_at)}
								</p>
							</div>
						</div>
						<div>
							<img
								src={
									blogDetailData.cover_image
										? blogDetailData.cover_image
										: "https://res.cloudinary.com/practicaldev/image/fetch/s--xre6-c_p--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p2ov9qe4996s835kzkqk.png"
								}
								className="blogimage"
							/>
							<div
								className="blog-content"
								dangerouslySetInnerHTML={{
									__html: blogDetailData.body_html,
								}}
							></div>
						</div>
					</>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
};

export default BlogDetail;
