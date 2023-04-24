import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 15, 3, 10, 12, 8, 4, 40],
      backgroundColor: [
        "#1c54e1",
        "#0e3bff",
        "#122c9d",
        "#2447e3",
        "#1c54e1",
        "#0432ff",
        "#082bc5",
        "#1439dd",
      ],

      borderWidth: 0,
    },
  ],
};

function Chart({ clasS }) {
  return <Doughnut className={clasS} data={data} />;
}
export default Chart;
