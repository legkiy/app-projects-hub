import fs from 'fs';
import path from 'path';

// Функция для получения списка файлов page.tsx в папке src/app
function getPageFiles() {
  const folderPath = path.join(process.cwd(), 'src', 'app');

  // Читаем содержимое папки
  const files = fs.readdirSync(folderPath);

  // Фильтруем только файлы с расширением .tsx
  const pageFiles = files.filter((file) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    return (
      stats.isDirectory() && fs.existsSync(path.join(filePath, 'page.tsx'))
    );
  });

  return pageFiles;
}

export default getPageFiles;
