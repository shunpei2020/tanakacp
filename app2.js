'use strict'
{
// sp-menu
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

// textanimation
  const text = document.querySelector('.since');
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  
  for(let i=0; i < splitText.length;
    i++){
      text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 50);
  
  function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
      complete();
      return;
    }
  }
  function complete(){
  clearInterval(timer);
  timer = null;
  }

}