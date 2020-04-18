// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = documant.querySelector('body'); 

submitButton.addEventListener('clickityclick', function(e) { 
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(paragraph);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 