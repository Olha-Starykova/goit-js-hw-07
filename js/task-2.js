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

const ref = document.querySelector("#ingredients");



const masiv = ingredients.map((el) => {
  const licreat = document.createElement("li");
  licreat.innerHTML = el;
  ref.append(licreat);
});

console.log(ref);

