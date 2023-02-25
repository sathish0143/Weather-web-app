$(".progress-cir").each(function () {
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt($val.text(), 20);
  console.log("progrss - called");

  $({ p: 0 }).animate(
    { p: perc },
    {
      duration: 3000,
      easing: "swing",
      step: function (p) {
        $bar.css({
          transform: "rotate(" + (90 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p | 0);
      },
    }
  );
});

var xValues = [23, 29, 58, 75, 33, 20, 73, 49];
var yValues = [2, 2, 3, 3.5, 2.5, 2, 3, 2.5];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues.map(function (value) {
      return value + "%";
    }),
    datasets: [
      {
        lineTension: 0,
        backgroundColor: "hsl(212, 73%, 63%)",
        pointRadius: 0,
        data: yValues,
        borderSkipped: false,
        fill: true,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: { min: 1, max: 5, display: false },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: { fontSize: 8 },
          gridLines: {
            borderDashOffset: 0,
            drawBorder: true,
            zeroLineColor: "black",
            display: true,
            drawBorder: true,
            zIndex: 10,
          },
        },
      ],
    },
  },
});
