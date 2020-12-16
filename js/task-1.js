/**В HTML есть список категорий ul#categories.

< ul id = "categories" >
    <li class="item">
        <h2>Животные</h2>

        <ul>
            <li>Кот</li>
            <li>Хомяк</li>
            <li>Лошадь</li>
            <li>Попугай</li>
        </ul>
    </li>
    <li class="item">
        <h2>Продукты</h2>

        <ul>
            <li>Хлеб</li>
            <li>Петрушка</li>
            <li>Творог</li>
        </ul>
    </li>
    <li class="item">
        <h2>Технологии</h2>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
        </ul>
    </li>
</ul >
    Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
 то есть элементов li.item.
 Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories,
 найдет и выведет в консоль текст заголовка элемента(тега h2) и
количество элементов в категории(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */


const items = [...document.querySelectorAll("li.item")]; //так как есть итератор, сделали массив , что бы можно было итерироваться
//console.log(`items`, items);
console.log(`В списке ${items.length} категории.`);

items.map((item) => {
  //console.log("item", item);
    const title = item.querySelector("h2");
//    console.log("title", title);
  const list = item.querySelectorAll("ul li");
  //console.log("list", list);
  return {
    title: title.textContent,
    count: list.length,
  };
})
    .forEach(entry => {
    //console.log('entry', entry);
    console.log('Категория: ', entry.title, '\r\nКоличество Элементов:', entry.count);
    });




//==============================2========================================
// const categoryItemRef = document.querySelectorAll(".item");
// console.log(categoryItemRef);
// console.log(`В списке ${categoryItemRef.length} категории`);
// console.log("================================================");
// const categoryFirstRef = document.querySelector(".item");
// const titleFirstRef = categoryFirstRef.querySelector("h2");
// const numberFirstRef = categoryFirstRef.querySelectorAll("li");
// console.log(
//     `Категория: ${titleFirstRef.textContent}\nКоличество элементов: ${numberFirstRef.length}`
// );
// console.log("================================================");
// const categorySecRef = categoryFirstRef.nextElementSibling;
// console.log(
//     `Категория: ${
//     categorySecRef.querySelector("h2").textContent
//     } \nКоличество элементов: ${categorySecRef.querySelectorAll("li").length}`
// );
// console.log("================================================");
// const categoryThirdRef = categorySecRef.nextElementSibling;
// console.log(
//     `Категория: ${
//     categoryThirdRef.querySelector("h2").textContent
//     } \nКоличество элементов: ${categoryThirdRef.querySelectorAll("li").length}`
// );



//=========================================================3==============================
const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
    .map(
        categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
    )
    .join("\n");
console.log(categoriesArray);
