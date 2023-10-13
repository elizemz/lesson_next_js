import Link from "next/link";
import React from "react";

const ErrorPage = () => {
	return (
		<>
			<div className="flex justify-center gap-10 my-36">
				<h1 className="text-slate-950 text-7xl font-normal">404</h1>
				<div className="w-px h-40 bg-gray-300"></div>
				<div className="flex py-2 flex-col gap-5">
					<h1 className="pnf">Page Not Found</h1>
					<p className="errortext">
						We're sorry, This page is unknown or does not exist the page you are
						looking for.
					</p>
					<div className="flex py-2.5 px-4 justify-center rounded-md text-white text-center text-sm bg-indigo-500 font-medium leading-5 w-32 h-10">
						<Link href="/">Back To Home</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;

// .backclue {
// 	display: flex;
// 	padding: 10px 16px;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 6px;
// 	background: #4b6bfb;
// 	color: #fff;
// 	text-align: center;
// 	font-size: 14px;
// 	font-style: normal;
// 	font-weight: 500;
// 	line-height: 20px;
// }

// .thirddiv {
// 	display: flex;
// 	padding: 8px 0px;
// 	flex-direction: column;
// 	justify-content: flex-end;
// 	align-items: flex-start;
// 	gap: 20px;
// }

// 	display: flex;
// width: 642px;
// height: 208px;
// justify-content: center;
// align-items: center;
// gap: 40px;
//background-color: rgba(90,34,22,0.6)
// border-radius: 90px

// .numberthing {
// 	color: #000;
// 	font-size: 72px;
// 	font-weight: 400;
// 	line-height: 72px;
// }

// .line {
// 	width: 1px;
// 	height: 156px;
// 	background: #e8e8ea;
// }
