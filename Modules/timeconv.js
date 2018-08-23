process.stdin.on('readable', function() {
    var input = process.stdin.read();
      if (input !== null) {
          console.log('Minutes: ~', (input / 60).toFixed(0), 'min', (input % 60), 'sec');
        }
});