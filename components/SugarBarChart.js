import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export default function SugarBarChart({ chartData }) {
	const [data, setData] = useState({
		labels: chartData.map((item) => item.name),
		datasets: [
			{
				label: "sugar prices in $",
				data: chartData.map((item) => item.price),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	});

	return (
		<div className="p-8">
			<div className="flex justify-center">
				<p className="text-sm text-gray-500">{chartData.length} Brands</p>
			</div>

			<Bar data={data} />
		</div>
	);
}
