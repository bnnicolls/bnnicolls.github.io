// export function renderChart() {
const labels = [
  "Javascript",
  "Java",
  "React",
  "Angular",
  "NodeJS",
  "Git",
  "MongoDB",
  "SQL"
];
const data = {
  labels: labels,
  datasets: [
    {
      axis: "y",
      data: [5, 2, 3, 4, 5, 5, 5, 4],
      fill: true,
      backgroundColor: "#caebf2",
      borderColor: "#c0e2ec",
      borderWidth: 1,
      hoverBackgroundColor: "#ff3f3b"
    }
  ]
};

let delayed;

const chartconfig = {
  type: "bar",
  data,
  options: {
    plugins: {
      legend: false,
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 400 + context.datasetIndex * 200;
        }
        return delay;
      }
    },
    responsive: true
    // indexAxis: "y"
  }
};

// var ctx = document.getElementById("skillChart").getContext("2d");
// var myChart = new Chart(ctx, chartconfig);
// return myChart;
// }
