let boton = document.querySelector('.icon');
const burger = document.querySelector('#bars');


boton.addEventListener('click', () => {
  
  var enlace = document.getElementById("topnav");

  if (enlace.className === "nav") {
    enlace.className += " responsive";
    burger.classList.toggle("fa-times");
  } else {
    enlace.className = "nav";
  }
});