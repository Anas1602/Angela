// Adding event listener to all Buttons

let myButtons = document.querySelectorAll('.drum');

for(i =0; i < myButtons.length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    alert('I got clicked');
  });
};


