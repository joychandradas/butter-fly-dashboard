const data = {
  labels: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
  datasets: [
    {
      label: "Employer",
      data: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
      backgroundColor: ["#0014FF"],
    },
    {
      label: "Employee",
      data: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
      backgroundColor: ["#4E4FEB"],
    },
    {
      label: "Total Interest",
      data: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
      backgroundColor: ["#068FFF"],
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false,
        },
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Set this to false to remove the legend from the chart
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// range sync
const value = document.querySelector("#emp-cont-value");
const input = document.querySelector("#emp-cont-inp");
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + "%";
});

const value1 = document.querySelector("#retire-age-value");
const input1 = document.querySelector("#retire-age-inp");
input1.addEventListener("input", (event) => {
  value1.textContent = event.target.value;
});
