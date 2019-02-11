var https = require('https');

function getAndPrintHTML() {
  var output = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      output += data;
    });

    response.on('end', function () {
      console.log('Response stream complete.');
      console.log(output);
    });
  });
}

getAndPrintHTML();