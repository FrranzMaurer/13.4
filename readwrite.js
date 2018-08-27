var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie')
            console.log(data);
        });
    });
});