// Properties : get (getting a property) or set (setting a property)
// Methods (): Call | a Mathod is a function an object can do!

let heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);

heading.style.color = "blue";

document.querySelector("input").click();

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = 'Third list';

// Selecting HTML with JS

//get elements by tag name ==> Returns an array, you can apply all array methods
console.log(document.getElementsByTagName('li')); //array
document.getElementsByTagName('li') [2].style.color = 'green';
console.log(document.getElementsByTagName('li').length);

//get elements by class names
console.log(document.getElementsByClassName('btn')); // array even if it's only 1 item

// get element by id
console.log(document.getElementById('list').style.color = 'Yellow');

//get element by selector ==> class id ...
console.log(document.querySelector('.item a'));

document.querySelector('.item a').style.color = 'red';

// Manipulating Styles of  HTML with JS
// instead of dashes we use camel cases
document.querySelector('.btn').style.background = 'Green';
document.querySelector('.btn').style.border = 'none';
document.querySelector('.btn').style.color = 'white';
document.querySelector('.btn').style.padding = '10px 20px';
document.querySelector('.btn').style.borderRadius = '20px';
document.querySelector('.btn').style.marginLeft = '20px';

// The separation of concerns: Structure vs Style vs Bahaviour
// add - remove - toggle
document.querySelector('.btn').classList.add('invisible');

document.querySelector("ul").lastElementChild.classList.add('huge');

// text manipulation and text Content Property
console.log(document.querySelector('h2').innerHTML);
console.log(document.querySelector('h2').textContent);

//Manipulating HTML Element Attributes
console.log(document.querySelector('a').setAttribute('href', 'https://www.bing.com'));



