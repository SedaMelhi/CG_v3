let archs = document.querySelectorAll(".arch"),
    content = document.querySelector(".border_second"),
    darkWrap = document.querySelector(".dark-wrap"),
    main2 = document.querySelector(".main2");
main2.scrollHeight = archs[1].scrollHeight;
content.addEventListener("wheel", function() {
  archs.forEach(arch => arch.scrollTop = content.scrollTop);
});

