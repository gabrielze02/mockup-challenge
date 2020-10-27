var temps = [
  { time: "8AM", temp: "52" },
  { time: "12PM", temp: "42" },
  { time: "16PM", temp: "31" },
  { time: "20PM", temp: "40" },
  { time: "12AM", temp: "50" },
  { time: "4AM", temp: "60" },
];

var graphs = document.getElementById("graphs");
temps.forEach((temp) => {
  let str =
    '<div class="temp">' +
    temp.time +
    '</div><div style="height: ' +
    temp.temp * 3 +
    'px;" class="vertical"></div>';
  let e = document.createElement("div");
  e.className = "column";
  e.innerHTML = str;
  graphs.appendChild(e);
});
