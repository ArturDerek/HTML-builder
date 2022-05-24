let fs = require('fs');
let path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
fs.createWriteStream(path.join(__dirname, './text.txt'));
const showQuestion = () => {
  readline.question('Для завершения работы используй Ctrl+C или ключевое слово exit. Введи текст файла: ',function add(data){
    if (data==='exit'){
      console.log('До встречи!');
      readline.close();
    } else {
      anOne();
    }
    function anOne(){
      fs.appendFile(path.join(__dirname, './text.txt'), data, (err) => {
        if (err) throw err;
        else {
          console.log('Добавлено в файл: ' + data + '. Продолжайте дополнять файл.');
          showQuestion();
        }
      });
    }
  });
};
showQuestion();
readline.on('SIGINT', () => {
  readline.close();
  console.log('До скорой встречи!');
});
