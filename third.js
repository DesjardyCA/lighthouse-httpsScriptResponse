var https = require('https');

function getAndPrintHTML(options) {
  var tempObj = options;
  var output = "";

  if (typeof options === 'string') {
    var splitAt = options.indexOf("/");
    tempObj = {
      host: options.slice(0, splitAt),
      path: options.slice(splitAt, options.length)
    }
  }

  console.log(tempObj);

  https.get(tempObj, (response) => {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

// getAndPrintHTML(requestOptions);
getAndPrintHTML('sytantris.github.io/http-examples/step3.html');