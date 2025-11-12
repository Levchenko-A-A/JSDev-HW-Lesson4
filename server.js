const static = require('node-static');

// Создаем экземпляр node-static сервера
// Указываем папку, из которой раздавать файлы (например, текущая папка '.')
const file = new static.Server('.', {
  cache: 7200,
  gzip: true,
});

// Запускаем сервер на порту 8080
require('http')
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8080);

console.log('Server running at http://localhost:8080');
