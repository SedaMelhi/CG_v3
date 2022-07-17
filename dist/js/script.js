let archs = document.querySelectorAll(".arch"),
    content = document.querySelector(".border_second"),
    darkWrap = document.querySelector(".dark-wrap"),
    opacity = 1;
content.addEventListener("scroll", function() {
  archs.forEach(arch => arch.scrollTop = content.scrollTop);
});

