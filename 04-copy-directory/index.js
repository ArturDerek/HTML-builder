let fs=require('fs');
let path=require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Папка создана');
});
fs.readdir(path.resolve( '04-copy-directory','files-copy'), {withFileTypes: true}, (err, files)=> {
  let objFiles = files;
  //console.log(objFiles);
  let objNames = [];
  for (let i = 0; i < objFiles.length; i++) {
    objNames[i] = objFiles[i].name;
    fs.rm(path.join(__dirname, 'files-copy',objNames[i]), {force: true, recursive: true}, (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
});
fs.readdir(path.resolve( '04-copy-directory','files'), {withFileTypes: true}, (err, files)=> {
  let objFiles = files;
  //console.log(objFiles);
  let objNames = [];
  for (let i = 0; i < objFiles.length; i++) {
    objNames[i] = objFiles[i].name;
    fs.copyFile(path.join(__dirname, 'files', objNames[i]), path.join(__dirname, 'files-copy',objNames[i]), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Файл  '+objNames[i] + '  успешно скопирован!');
      }
    });
  }
  //console.log(objNames);
});
