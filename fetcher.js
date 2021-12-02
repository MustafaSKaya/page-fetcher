const fs = require('fs');

const request = require('request');

request('http://www.reddit.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body);
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("file saved");
  });
});