'use strict'
{
// PhotoSlider
  const slide = document.querySelector('.slide-image');
  const slideImages = document.querySelector('.slide-image img');
  
  // Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  
  // Counter
  let counter = 1;
  const size = slideImages.clientWidth;
  
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
  // Button Listener
  nextBtn.addEventListener('click', () => {
    if(counter > 18) return;
    slide.style.transition = "transform .5s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });
  
  prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    slide.style.transition = "transform .5s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

// textanimation
  const text = document.querySelector('.since2');
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

// スムーススクロール
  const smoothScrollTrigger = document.querySelectorAll('#smooth');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

// Visual Effect
    function scrollAppear(){
    let introText = document.querySelector('.about');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition){
      introText.classList.add('intro-appear');
    }
  }
  window.addEventListener('scroll',scrollAppear);

}

