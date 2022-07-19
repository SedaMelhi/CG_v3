let archs = document.querySelectorAll(".arch"),
    content = document.querySelector(".border_second");

content.addEventListener("scroll", function() {
  archs.forEach(arch => arch.scrollTop = content.scrollTop);
});

let artists = document.querySelector(".artists"),
    cards = document.querySelector(".cards"),
    expect = document.querySelector(".expect__text");

cards.addEventListener("click", function() {
  archs[1].classList.toggle("arch__middle_anim")
  cards.classList.toggle("cards__hidden");
  expect.classList.toggle("expect__hidden")
  artists.classList.toggle("artists__visible")
  
  setTimeout(() => expect.style.display = "none", 550)
  setTimeout(() => cards.style.display = "none", 550)
  
});