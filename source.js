export function renderChart() {
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
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 80],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderWidth: 1
      }
    ]
  };
  const chartconfig = {
    type: "bar",
    data,
    options: {
      indexAxis: "y"
    }
  };
  var ctx = document.getElementById("skillChart").getContext("2d");
  var myChart = new Chart(ctx, chartconfig);
}
