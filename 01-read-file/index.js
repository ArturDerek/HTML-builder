let fs = require('fs');
let path=require('path');
let rStream = fs.ReadStream(path.resolve('01-read-file', 'text.txt'), {encoding: 'utf-8'});
rStream.on('readable', function(){
  let data='';
  if (data==='') {
    data = rStream.read();
    console.log(data);
  }
});
