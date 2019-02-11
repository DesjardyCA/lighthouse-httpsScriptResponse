module.exports = function getHTML(options, callback) {
  var https = require('https');
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
};