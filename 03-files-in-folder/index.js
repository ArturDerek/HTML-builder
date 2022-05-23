let fs=require('fs');
let path=require('path');

fs.readdir(path.resolve( 'secret-folder'), {withFileTypes: true}, (err, files)=> {
  if (err) {
    console.log(err);
  } else {
    let objFiles = files;
    let objNames=[];
    for(let i = 0; i < objFiles.length; i++ ){
      if (objFiles[i].isFile()){
        objNames[i]=objFiles[i].name;
      }
    }
    console.log(objNames);
    for(let i = 0; i < objNames.length; i++ ){
      if (typeof objNames[i]==='string'){
        let arrLink='/'+objNames[i];
        console.log(path.parse(objNames[i]).name+'-'+path.extname(objNames[i])+'-'+arrLink[i].stat.sizes);
      }
    }

  }
});
