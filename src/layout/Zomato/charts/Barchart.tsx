import * as echarts from "echarts";
import { useEffect } from "react";
import { RestaurantData } from "../../../types/data";

export default function BarChart({ data }: { data: RestaurantData[] }) {
  useEffect(() => {
    let chartDom = document.getElementById("bar-chart")!;
    let myChart = echarts.init(chartDom);

    // Count the number of restaurants per type
    const typeCount: Record<string, number> = {};
    data.forEach((restaurant) => {
      // @ts-ignore
      const type = restaurant["listed_in(type)"];
      typeCount[type] = (typeCount[type] || 0) + 1;
    });

    const chartOption = {
      title: { text: "Number of Restaurants by Type", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: Object.keys(typeCount),
        axisLabel: { rotate: 30 },
      },
      yAxis: { type: "value", name: "Number of Restaurants" },
      series: [
        {
          type: "bar",
          data: Object.values(typeCount),
          color: "#ff5733",
        },
      ],
    };

    myChart.setOption(chartOption);
  }, [data]);

  return <div id="bar-chart" style={{ width: "100%", height: "400px" }}></div>;
}
