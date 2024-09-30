// querySelectorAll()
// Return a NodeList

const listItems = document.querySelectorAll('.item');
console.log(listItems);

// Access elements by index
console.log(listItems[1].innerHTML);

// Setting a color for specific elements
listItems[1].style.color = 'red';

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = `Oranges <button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
  }
});

//
// getElementsByClassName()
// Return an HTMLCollection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getELementsByTagName()
// Return an HTMLCollection

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[1].innerText);