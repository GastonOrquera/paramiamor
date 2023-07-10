function redirectToAnotherPage() {
    window.location.href = "parteno/otra_pagina.html";
}

 function moveButton() {
     var button = document.getElementById("siBtn");
     button.style.left = Math.random() * 400 + "px";
     button.style.bottom = Math.random() * 400 + "px";
 }


















































 //  let btn = document.querySelector('#siBtn');

//  btn.addEventListener('mouseover', movimiento);

//  function movimiento(){
//      if(btn.classList.contains('posicion_normal')){
//          btn.classList.replace('posicion_normal', 'move1');
//      }else if(btn.classList.contains('move1')){
//          btn.classList.replace('move1', 'move2');
//      }else if(btn.classList.contains('move2')){
//          btn.classList.replace('move2', 'move3');
//      }else if(btn.classList.contains('move3')){
//          btn.classList.replace('move3', 'move4');
//      }else if(btn.classList.contains('move4')){
//          btn.classList.replace('move4', 'posicion_normal');
//      }
//  }