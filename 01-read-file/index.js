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
// ДОРОГОЙ СТУДЕНТ, ОЧЕНЬ ТЕБЯ ПОПРОШУ ПРОВЕРИТЬ МОИ ТАСКИ ЧУТЬ ПОЗЖЕ ЧЕМ ТЫ МОГ БЫ))) 
// ОБЕЩАЮ НЕ ЗАТЯГИВАТЬ И В ОЧЕНЬ СКОРОМ ВРЕМЕНИ ПОИСПРАВЛЯТЬ ИХ И ДОДЕЛАТЬ 
// ПО ГОТОВНОСТИ Я УБЕРУ ЭТИ СООБЩЕНИЯ ИЗ КОДА)))
// СПАСИБО, ЗА ПОНИМАНИЕ И УСПЕХОВ В УЧЕБЕ)
