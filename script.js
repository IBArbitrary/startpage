var d = new Date();
var n = d.toLocaleString([], {
  hour: "2-digit",
  minute: "2-digit",
  timezone: "IST",
});
document.getElementById("time").innerHTML = n;
