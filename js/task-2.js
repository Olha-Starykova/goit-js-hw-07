const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

/**Напиши скрипт, который для каждого элемента массива
 *  ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в список ul.ingredients.
 *  Для создания DOM-узлов используй document.createElement(). */

console.log("<-------2------>");

const ulRef = document.querySelector("#ingredients");
const ingredientsRef = ingredients.forEach((ingredient) => {
  //console.log("ingredient", ingredient);

  let items = document.createElement("li");
  //console.log(items);
  items.textContent = ingredient;

  ulRef.append(items);
});

console.log(ulRef);
