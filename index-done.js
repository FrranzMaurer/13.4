var readline = require("readline");
var interface = readline.createInterface({
  input: process.stdin
});

interface.on("line", function(line) {
  if (!isNaN(line)) {
    var numericInput = parseFloat(line);
    console.log(
      "Minutes: ~",
      (numericInput / 60).toFixed(0),
      "min",
      numericInput % 60,
      "sec"
    );
    console.log(
      "Hours: ~",
      (numericInput / 3600).toFixed(0),
      "hrs",
      ((numericInput % 3600) / 60).toFixed(0),
      "min",
      numericInput % 60,
      "sec"
    );
  } else if (line === "/exit") {
    process.exit();
  } else {
    process.stderr.write("Wrong instruction!\n");
  }
});