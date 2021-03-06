let archs = document.querySelectorAll(".arch"),
    main = document.querySelector(".main2"),
    content = document.querySelector(".border_second"),
    map = document.querySelector(".map");

main.style.marginTop = `${archs[1].scrollHeight - document.querySelector(".middle-dark").scrollHeight - document.querySelector(".dark-wrap").scrollHeight}px`

window.addEventListener("resize", function() {
  main.style.marginTop = `${archs[1].scrollHeight - document.querySelector(".middle-dark").scrollHeight - document.querySelector(".dark-wrap").scrollHeight}px`
})

content.addEventListener("scroll", function() {
  archs[1].scrollTop = content.scrollTop;
  //////////////для map//////////////
  // const posTop = map.getBoundingClientRect().top;
  // if((posTop + (map.clientHeight - 140) <= window.innerHeight && posTop >= 0) || posTop <= 0) {
  //   document.querySelector(".noise").style.zIndex = "0";
  // }else{
  //   document.querySelector(".noise").style.zIndex = "5";
  // }
});


let artists = document.querySelector(".artists"),
    cards = document.querySelector(".cards"),
    expect = document.querySelector(".expect__text"),
    top2 = document.querySelector(".top"),
    close = document.querySelector(".artists__close");

artists.style.display = "none";

content.addEventListener("click", function(event) {
  let arr = new Array(...cards.childNodes)
 
  if(event.target == cards ||arr.includes(event.target)){
    try {
      top2.scrollIntoViewIfNeeded(false);
      archs[1].scrollTop -= 30;
    } catch (error) {
      top2.scrollIntoView({block: "center"});
      archs[1].scrollTop += (archs[1].clientHeight/2) - 70;
    }
  }
});

cards.addEventListener("click", function() {
  

  archs[1].classList.toggle("arch__middle_anim");
  cards.classList.toggle("cards__hidden")
  cards.classList.toggle("cards__visible")
  
  expect.classList.toggle("expect__hidden")
  expect.classList.toggle("expect__visible")

  artists.style.display = "block";
  artists.classList.toggle("artists__visible");
  artists.classList.toggle("artists__hidden")

  setTimeout(() => expect.style.display = "none", 900)
  setTimeout(() => cards.style.display = "none", 900)
  
});

close.addEventListener("click", function() {
  archs[1].classList.toggle("arch__middle_anim")

  cards.classList.toggle("cards__hidden")
  cards.classList.toggle("cards__visible")
  cards.style.display = "flex";

  artists.classList.toggle("artists__visible")
  artists.classList.toggle("artists__hidden")

  expect.classList.toggle("expect__hidden")
  expect.classList.toggle("expect__visible")
  expect.style.display = "block";

  setTimeout(() => artists.style.display = "none", 800)
});





