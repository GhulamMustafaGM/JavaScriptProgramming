var fs = require('fs');

// create a file named mynewfile3.txt:

fs.writeFile('mynewfile3.txt', 'Hello content written!', function(err) {
    if (err) throw err;
    console.log('Saved');
});