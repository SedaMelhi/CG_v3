let arch1 = document.querySelector(".arch__left"),
    arch2 = document.querySelector(".arch__right"),
    content = document.querySelector(".border_second"),
    darkWrap = document.querySelector(".dark-wrap"),
    opacity = 1;
content.addEventListener("scroll", function() {
  arch1.scrollTop = content.scrollTop;
  arch2.scrollTop = content.scrollTop;
});

