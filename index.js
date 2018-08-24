process.stdin.setEncoding('utf-8');
var OSinfo = require('./modules/OSInfo');

            console.log(process.versions);
            console.log("language: " + process.env.lang);
            OSinfo.print();
            process.exit();

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
            process.stdout.write('Quitting app!\n');
            break;
        default:
            process.stderr.write('Wrong instruction!');
        }
    }
});