var getHTML = require('../fith');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML(html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printHTML);