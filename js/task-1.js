const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');


console.log(`Number of categories: ${categoriesItems.length}`);

// Для кожної категорії виведемо текст заголовка  і кількість елементів у категорії (усіх <li>, вкладених у нього)

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}.`);
  console.log(`Elements: ${categoryItemsCount}`);
});