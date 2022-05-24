let fs=require('fs');
let path=require('path');
fs.readdir(path.resolve( '03-files-in-folder','secret-folder'), {withFileTypes: true}, (err, files)=> {
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
    // console.log(objNames);
    for(let i = 0; i < objNames.length; i++ ){
      if (typeof objNames[i]==='string'){
        let arrLink=[];
        arrLink[i]= path.join(__dirname,'secret-folder', objNames[i]);
        arrLink[i]=arrLink[i].slice(44);
        // console.log(arrLink[i]);
        fs.stat(arrLink[i], (err, stats) => {
          if (err) throw err;
          console.log(path.parse(objNames[i]).name+' - '+path.extname(objNames[i])+' - '+ (stats.size / 1024)+' kB');
        });
      }
    }
  }
});
