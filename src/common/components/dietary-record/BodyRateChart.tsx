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
import useResize from "@/common/hooks/useResize";
import { SingleBodyRateType } from "@/common/lib/dashboard/dietary-record/bodyRate";

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
  BodyRate: SingleBodyRateType[];
  item?: string;
}

const BodyRateChart: FC<BodyRateChartProps> = ({ item, tab, BodyRate }) => {
  // let labels = ["2023/10/28", "2023/10/29", "2023/10/30", "2023/10/31"];
  // let data = [12, 19, 3, 5];

  const isMobile = useResize();

  let labels: string[] = [];
  let data: number[] = [];

  if (isMobile && Array.isArray(BodyRate)) {
    BodyRate.map((bodyBate, index) => {
      labels.push(bodyBate.CreateDate);
      data.push(bodyBate[item as string]);
    });
  }

  if (!isMobile && Array.isArray(BodyRate)) {
    BodyRate.map((bodyBate) => {
      labels.push(bodyBate.CreateDate);
      data.push(bodyBate[tab]);
    });
  }

  const findMin = Math.min(...data);

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
              min: findMin - 3,
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
