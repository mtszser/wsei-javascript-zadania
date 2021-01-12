// Zadanie 1
const nevDiv = document.createElement('div');
nevDiv.textContent = 'To jest nowy element';
document.getElementById('root').appendChild(newDiv);

// Zadanie 2

const FavouriteList = document.CreateElement('ul');

const Fruits = 
[
    "Apple",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Durian", // Bo cebula to nie owoc :D 
];
Fruits.forEach((fruit) => {
    const li = document.createElement('li');
    item.textContent = fruit;
    FavouriteList.appendChild(li);
});
  document.getElementById('root').appendChild(fruitsList);
  
  // Zadanie 3
  FavouriteList.addEventListener('click', () => {
    const items = FavouriteList.children;
    for (let i = 0; i < items.length; i++) {
      if (i % 2 !== 0) {
        FavouriteList.removeChild(items[i]);
      }
    }
});