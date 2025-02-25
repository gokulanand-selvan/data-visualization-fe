import * as echarts from "echarts";
import { useEffect } from "react";
import { RestaurantData } from "../../../types/data";

export default function LineChart({ data }: { data: RestaurantData[] }) {
  useEffect(() => {
    let chartDom = document.getElementById("line-chart");
    let myChart = echarts.init(chartDom);

    // Prepare data: Sort by votes for better trend visualization
    const sortedData = [...data].sort((a, b) => a.votes - b.votes);
    const votes = sortedData.map((restaurant) => restaurant.votes);
    const ratings = sortedData.map((restaurant) => parseFloat(restaurant.rate));

    const option = {
      title: {
        text: "Trend of Ratings by Votes",
        left: "center",
        textStyle: { color: "#fff" },
      },
      backgroundColor: "#1e1e1e",
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        name: "Votes",
        data: votes,
        axisLabel: { color: "#fff" },
        nameTextStyle: { color: "#fff" },
      },
      yAxis: {
        type: "value",
        name: "Rating",
        min: 0,
        max: 5,
        axisLabel: { color: "#fff" },
        nameTextStyle: { color: "#fff" },
      },
      series: [
        {
          name: "Rating",
          type: "line",
          data: ratings,
          smooth: true,
          itemStyle: { color: "#ff5733" },
        },
      ],
    };

    myChart.setOption(option);
  }, [data]);

  return <div id="line-chart" style={{ height: "400px" }} />;
}
