window.onload = function(){ 
const btnOne = document.querySelector('#btnOne');
btnOne.onclick = () => alert("Hello World");


const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
  alert("Hello World");
});
};