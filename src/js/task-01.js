const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  const categoryElements = categoryItem.querySelectorAll('ul li');

  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});


