const fs = require('fs');
const { get } = require('https');
const request = require('request');
const args = process.argv.slice(2);

function getFilesizeInBytes(filename) {
  let stats = fs.statSync(filename);
  let fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body);
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${getFilesizeInBytes("index.html")} of bytes in ${args[1]}.`);
  });
});