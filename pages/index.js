import Head from 'next/head'
import Image from 'next/image'
import { Inter, Assistant } from "@next/font/google";

import { useEffect, useState } from "react";
import axios from "axios";
import MainTable from "@/components/MainTable";
import SugarBarChart from "@/components/SugarBarChart";
import Analytics from "./analytics";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Kulea Scrapper</title>
				<meta name="description" content="Information Dashboard for Kulea" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-16 pt-16">
				{/*Intro text */}
				<div className="p-8">
					<h1 className="font-bold text-3xl text-blue-600 my-3 font-mono">
						{" "}
						👋 Hi, Kelvin
					</h1>
					<div className="flex justify-left space-x-5 items-center">
						<p className="text-sm font-normal">
							This platform provides real-time insights into sugar price in the
							local markets.
						</p>
						<Link
							href="/analytics"
							className="text-sm font-normal border px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white text-gray-600"
						>
							View Analytics
						</Link>
					</div>
				</div>

				<div className="flex flex-row space-x-8">
					<MainTable />
				</div>
			</main>
		</>
	);
}


