import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

import SugarBarChart from "@/components/SugarBarChart";
import Link from "next/link";

const Analytics = ({ sugarData, kenyanData, ugandaData, nigeriaData }) => {
	return (
		<div className="p-12">
			<div className="px-8 flex items-center justify-between">
				<h1 className="font-bold text-3xl font-mono">All Analytics</h1>

				<Link
					href="/"
					className="text-sm font-normal border px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white text-gray-600"
				>
					Home
				</Link>
			</div>

			<SugarBarChart chartData={sugarData} />

			{/*  country data  */}
			<div className="px-8 space-y-4">
				<div>
					<div className="flex justify-center">
						<h1 className="text-xl font-mono font-semibold">Kenya 🇰🇪 </h1>
					</div>

					<SugarBarChart chartData={kenyanData} />
				</div>
				<div>
					<div className="flex justify-center">
						<h1 className="text-xl font-mono font-semibold">Nigeria 🇳🇬 </h1>
					</div>
					<SugarBarChart chartData={nigeriaData} />
				</div>
				<div>
					<div className="flex justify-center">
						<h1 className="text-xl font-mono font-semibold">Uganda 🇺🇬 </h1>
					</div>
					<SugarBarChart chartData={ugandaData} />
				</div>
			</div>
		</div>
	);
};

export default Analytics;

Analytics.getInitialProps = async (ctx) => {
	const res = await axios.get("http://localhost:5000/sugar/");
	const kenya = await axios.get("http://localhost:5000/sugar/kenya");
	const nigeria = await axios.get("http://localhost:5000/sugar/nigeria");
	const uganda = await axios.get("http://localhost:5000/sugar/uganda");

	const data = await res.data;
	const kenyanData = await kenya.data;
	const ugandaData = await uganda.data;
	const nigeriaData = await nigeria.data;
	return {
		sugarData: data,
		kenyanData,
		ugandaData,
		nigeriaData,
	};
};
