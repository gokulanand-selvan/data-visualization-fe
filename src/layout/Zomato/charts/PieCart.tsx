import * as echarts from "echarts";
import { useEffect } from "react";
import { RestaurantData } from "../../../types/data";

export default function PieChart({ data: data }: { data: RestaurantData[] }) {
  useEffect(() => {
    let chartDom = document.getElementById("pie-chart");
    let myChart = echarts.init(chartDom);

    const onlineOrderData = data.reduce(
      (acc, restaurant) => {
        acc[restaurant.online_order]++;
        return acc;
      },
      { Yes: 0, No: 0 }
    );

    const option = {
      title: { text: "Online Order Availability", left: "center" },
      tooltip: { trigger: "item" },
      series: [
        {
          name: "Online Order",
          type: "pie",
          radius: "50%",
          data: [
            { value: onlineOrderData.Yes, name: "Yes" },
            { value: onlineOrderData.No, name: "No" },
          ],
        },
      ],
    };

    myChart.setOption(option);
  }, [data]);

  return <div id="pie-chart" style={{ height: "400px" }} />;
}
