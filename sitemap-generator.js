const SitemapGenerator = require('sitemap-generator');

// Создаем генератор sitemap
const generator = SitemapGenerator('https://msnek.ru', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml', // Путь до файла sitemap
});

// Начинаем генерацию sitemap
generator.start();

// По завершении генерации выводим сообщение в консоль
generator.on('done', () => {
  console.log('Sitemap generated!');
});

