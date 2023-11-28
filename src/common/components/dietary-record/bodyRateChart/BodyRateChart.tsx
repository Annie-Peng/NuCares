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
import { BodyRateType } from "@/types/interface";

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
  BodyRate: BodyRateType[];
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
      labels.push(bodyBate.CreateDate as string);
      data.push(bodyBate[item as string] as number);
    });
  }

  if (!isMobile && Array.isArray(BodyRate)) {
    BodyRate.map((bodyBate) => {
      const value = bodyBate[tab];
      labels.push(bodyBate.CreateDate as string);
      data.push(bodyBate[tab] as number);
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
              grid: {
                display: false,
              },
              min: findMin - 3,
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                autoSkip: false,
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
