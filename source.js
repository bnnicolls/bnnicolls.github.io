// ChartJS Configurations
const labels = [
  "Javascript",
  "Python",
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
      data: [5, 3.5, 2, 3.5, 4, 5, 5, 4.5, 4],
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
        text: "              My Top Technical Skills",
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Programming Languages/Technologies",
          padding: {
            top: 10,
            bottom: 20
          },
          font: {
            weight: "900"
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Skill Level (Ranked 0-5)",
          padding: {
            top: 5,
            bottom: 10
          },
          font: {
            weight: "900"
          }
        }
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

//ReCaptcha Code
let isRecaptchaValidated = false;

function toggleRecaptchaFormMessage(type = "error", hide = false) {
  document.getElementById(`recaptcha-form-${type}`).style.display = hide
    ? "none"
    : "inherit";
}

function onRecaptchaSuccess() {
  isRecaptchaValidated = true;
}

function onRecaptchaError() {
  toggleRecaptchaFormMessage("error");
  toggleRecaptchaFormMessage("success", true);
}

function onRecaptchaResponseExpiry() {
  onRecaptchaError();
}

window.onload = function () {
  const recaptchaForm = document.getElementById("recaptcha-form");
  recaptchaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // failure
    if (!isRecaptchaValidated) {
      toggleRecaptchaFormMessage("error");
      toggleRecaptchaFormMessage("success", true);
      return;
    }

    // success
    toggleRecaptchaFormMessage("error", true);
    toggleRecaptchaFormMessage("success");
  });
};
