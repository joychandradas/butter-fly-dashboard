// setup
const data = {
  labels: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [300, 200, 100, 50],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    responsive: true
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// range sync
const value = document.querySelector("#emp-cont-value");
const input = document.querySelector("#emp-cont-inp");
input.addEventListener("input", (event) => {
  value.textContent = event.target.value+'%';
});

const value1 = document.querySelector("#retire-age-value");
const input1 = document.querySelector("#retire-age-inp");
input1.addEventListener("input", (event) => {
  value1.textContent = event.target.value;
});
