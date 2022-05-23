let fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.createWriteStream('text.txt');

readline.question('Привет! Для завершения работы используй Ctrl+C или ключевое слово exit. Введи текст файла: ',function add(data){
  if (data==='exit'){
    console.error('До встречи!');
  } else {
    anOne();
  }
  function anOne(){
    fs.appendFile('text.txt', data, (err) => {
      if (err) throw err;
      console.log('Уже добавлено в файл: ' + data + '. Продолжайте дополнять файл: ');
    });
    console.log('В файл добавлен текст: ' + data);
  }
});
