process.stdin.on('readable', function() {
    var input = process.stdin.read();
      switch (input) {
          case (input < 3600):
          console.log('Minutes: ~', (input / 60).toFixed(0), 'min', (input % 60), 'sec');
          break;
          default:
          console.log("Hours: ~", (input / 3600).toFixed(0), "hrs", ((input % 3600) / 60).toFixed(0), "min", input % 60, "sec");
        }
});