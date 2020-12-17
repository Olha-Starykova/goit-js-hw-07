

 const ingredients = [
     "Картошка",
     "Грибы",
     "Чеснок",
     "Помидоры",
     "Зелень",
     "Приправы"
 ];

// const item = document.createElement("li");
// item.textContent = "Картошка";

// const div = document.querySelector(".ingredients");
// const ref = div.appendChild(item);
// console.log(ref);
 
const ulRef = ingredients.forEach(ingredient => {
    const div = document.querySelector("#ingredients");
    let items = document.createElement("li");
    console.log(items);
    items.textContent = ingredient;
     //console.log(ingredient);
       div.append(items);
    
 });

console.log(ulRef);  


