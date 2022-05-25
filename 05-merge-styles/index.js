let fs=require('fs');
let path=require('path');
fs.readdir(path.resolve( '05-merge-styles','styles'), {withFileTypes: true}, (err, files)=> {
  if (err) {
    console.log(err);
  } else {
    let objFiles = files;
    let objNames=[];
    let arrInput=[];

    fs.writeFile(path.join(__dirname,'project-dist','bundle.css'), '', 'utf-8', (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Файл записан');
    });

    for(let i = 0; i < objFiles.length; i++ ){

      if (objFiles[i].isFile() && objFiles[i].name.split('.')[1] === 'css'){
        //console.log(objFiles[i]);
        objNames[i]=objFiles[i].name;

        fs.readFile(path.resolve( '05-merge-styles','styles',objNames[i]), 'utf-8', function(err,data){
          if (err) {
            console.log(err);
          } else {
            arrInput[i]=data;

            fs.appendFile(path.join(__dirname,'project-dist','bundle.css'),arrInput[i] , (err) => {
              if (err) throw err;
              else {
                console.log('Добавлено в файл:'+objNames[i]);
              }
            });
          }
        });
      }
    }
  }
});
