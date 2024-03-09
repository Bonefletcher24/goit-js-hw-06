// Находим элемент ul#categories
const categoriesList = document.getElementById('categories');

// Получаем все элементы li.item внутри ul#categories
const categoryItems = categoriesList.querySelectorAll('.item');

// Выводим количество категорий
console.log(`Number of categories: ${categoryItems.length}`);

// Для каждого элемента li.item
categoryItems.forEach((categoryItem) => {
  // Находим заголовок категории (тег h2)
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  // Находим все элементы li внутри текущей категории
  const categoryElements = categoryItem.querySelectorAll('ul li');

  // Выводим информацию о категории
  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
