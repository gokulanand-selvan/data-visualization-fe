import * as echarts from "echarts";
import { useEffect } from "react";
import { RestaurantData } from "../../../types/data";

export default function ScatterPlot({ data }: { data: RestaurantData[] }) {
  useEffect(() => {
    let chartDom = document.getElementById("scatter-plot");
    let myChart = echarts.init(chartDom);

    // Prepare scatter plot data
    const scatterData = data.map((restaurant) => [
      // @ts-ignore
      restaurant["approx_cost(for two people)"],
      parseFloat(restaurant.rate), // Convert "4.1/5" -> 4.1
    ]);

    const option = {
      title: {
        text: "Cost vs. Ratings",
        left: "center",
        // textStyle: { color: "#fff" },
      },
      //   backgroundColor: "#1e1e1e",
      tooltip: { trigger: "item" },
      xAxis: {
        name: "Cost for Two",
        type: "value",
        // axisLabel: { color: "#fff" },
        // nameTextStyle: { color: "#fff" },
      },
      yAxis: {
        name: "Rating",
        type: "value",
        min: 0,
        max: 5,
        // axisLabel: { color: "#fff" },
        // nameTextStyle: { color: "#fff" },
      },
      series: [
        {
          type: "scatter",
          data: scatterData,
          symbolSize: 10,
          //   itemStyle: { color: "#ff5733" },
        },
      ],
    };

    myChart.setOption(option);
  }, [data]);

  return <div id="scatter-plot" style={{ height: "400px" }} />;
}
