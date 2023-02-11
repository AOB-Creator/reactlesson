import "./trend.scss";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 56, 3, 67, 3, 87, 65, 3, 78],
      backgroundColor: "rgba(255, 255, 255)",
    },
    {
      label: "Dataset 2",
      data: [4, 31, 7, 23, 34, 65, 2, 56],
      backgroundColor: "rgba(255, 255, 255)",
    },
  ],
};

function Trending() {
  return (
    <section className="trend">
      <Bar options={options} data={data} />
    </section>
  );
}

export default Trending;
