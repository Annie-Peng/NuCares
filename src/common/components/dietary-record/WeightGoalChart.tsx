import c3 from "c3";
import * as d3 from "d3";
import { useEffect } from "react";

const WeightGoalChart = () => {
  useEffect(() => {
    c3.generate({
      bindto: "#weightGoalChart",
      data: {
        columns: [
          ["data1", "10"],
          ["data2", "90"],
        ],
        type: "donut",
        order: null,
      },
      size: {
        width: 80,
        height: 80,
      },
      color: {
        pattern: ["#1f77b4", "transparent"],
      },
      interaction: {
        enabled: false,
      },
      donut: {
        title: "10%",
        width: 4,
        label: {
          show: false,
        },
      },
      legend: {
        hide: true,
      },
    });

    // d3.select(".c3-chart")
    //   .insert("circle", ":first-child")
    //   .attr("cx", 40)
    //   .attr("cy", 40)
    //   .attr("r", 30);
  }, []);

  return (
    <>
      <div id="weightGoalChart" className="flex text-12 relative"></div>
    </>
  );
};

export default WeightGoalChart;
