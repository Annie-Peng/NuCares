import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const textCenter = {
  id: "textCenter",
  beforeDatasetDraw(chart: ChartJS) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 16px sans-serif";
    ctx.fillStyle = "#e9a197";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `${data.datasets[0].data[0]}%`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const BMIGoalChart = () => {
  const data = ["80", "20"];

  return (
    <Doughnut
      data={{
        labels: ["Achievement", "UnAchievement"],
        datasets: [
          {
            data: data,
            backgroundColor: ["#e9a197", "#fae8e6"],
            borderColor: ["transparent", "transparent"],
            borderRadius: 50,
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
