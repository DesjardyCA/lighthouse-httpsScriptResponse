var https = require('https');

function getHTML(options, callback) {
  var output = "";

  if (typeof options === 'string') {
    var splitAt = options.indexOf("/");
    options = {
      host: options.slice(0, splitAt),
      path: options.slice(splitAt, options.length)
    }
  }

  console.log(options);

  https.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      output += data;
    });

    response.on('end', function () {
      console.log('Response stream complete.');
      // console.log(output);
      callback(output);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);