import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BodyRateChartProps {
  tab: string;
  BodyRate: any;
}

const BodyRateChart: FC<BodyRateChartProps> = ({ tab, BodyRate }) => {
  console.log(BodyRate);

  //   let labels = ["2023/10/28", "2023/10/29", "2023/10/30", "2023/10/31"];
  // let data = [12, 19, 3, 5];

  let labels: string[] = [];
  let data: string[] = [];

  if (Array.isArray(BodyRate)) {
    BodyRate.map((item) => {
      labels.push(item.Date);
      data.push(item[tab]);
    });
  }

  console.log(labels, data);

  return (
    <>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              borderWidth: 1,
              borderColor: "#51ACBF",
              backgroundColor: "#51ACBF",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};

export default BodyRateChart;
