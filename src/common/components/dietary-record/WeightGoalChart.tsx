import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const textCenter = {
  id: "textCenter",
  beforeDatasetDraw(chart: ChartJS) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = "bolder 16px sans-serif";
    ctx.fillStyle = "#3690A4";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      `${data.datasets[0].data[0]}%`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const WeightGoalChart = () => {
  const data = ["80", "20"];

  return (
    <Doughnut
      data={{
        labels: ["Achievement", "UnAchievement"],
        datasets: [
          {
            data: data,
            backgroundColor: ["#3690A4", "#D6EBEE"],
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

export default WeightGoalChart;
