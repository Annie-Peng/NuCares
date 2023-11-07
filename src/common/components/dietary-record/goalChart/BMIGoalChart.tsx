import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const textCenter = {
  id: "textCenter",
  beforeDatasetDraw(chart: ChartJS) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 16px sans-serif";
    ctx.fillStyle = `${(data.datasets as any[])[0].backgroundColor![0]}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `${data.datasets[0].data[0]}%`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

interface BodyFatCompletionRateProps {
  BodyFatCompletionRate: string;
}

const BMIGoalChart: FC<BodyFatCompletionRateProps> = ({
  BodyFatCompletionRate,
}) => {
  const UnAchievement = 100 - Number(BodyFatCompletionRate);

  const data = [BodyFatCompletionRate, String(UnAchievement)];
  const AchievementColor = data[0] === "100" ? "#E9A197" : "#3690A4";
  const borderRadius = data[0] === "100" ? 0 : 50;

  return (
    <Doughnut
      data={{
        labels: ["Achievement", "UnAchievement"],
        datasets: [
          {
            data: data,
            backgroundColor: [AchievementColor, "#D6EBEE"],
            borderColor: ["transparent", "transparent"],
            borderRadius: borderRadius,
          },
        ],
      }}
      options={{
        cutout: 34,
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        events: [],
      }}
      plugins={[textCenter]}
    />
  );
};

export default BMIGoalChart;
