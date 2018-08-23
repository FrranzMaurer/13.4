process.stdin.on('readable', function() {
    var input = process.stdin.read();
    	if (input !== null) {
	    	if (typeof input == "number") {
			    console.log('Minutes: ~', (input / 60).toFixed(0), 'min', (input % 60), 'sec');
			    console.log('Hours: ~', (input / 3600).toFixed(0), 'hrs', ((input % 3600)/60).toFixed(0), 'min', (input % 60), 'sec');
			} else if (input === '/exit') {
	            process.exit();
			} else {
	            process.stderr.write('Wrong instruction!');
	        }}
});