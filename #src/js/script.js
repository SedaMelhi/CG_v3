let archs = document.querySelectorAll(".arch"),
    content = document.querySelector(".border_second");

content.addEventListener("scroll", function() {
  archs[1].scrollTop = content.scrollTop;
});

let artists = document.querySelector(".artists"),
    cards = document.querySelector(".cards"),
    expect = document.querySelector(".expect__text"),
    close = document.querySelector(".artists__close");

artists.style.display = "none";

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