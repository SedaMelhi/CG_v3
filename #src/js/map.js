let balls = document.querySelectorAll(".map__circle"),
      map = document.querySelector(".map");

map.addEventListener("mousemove", function(e) {
   balls.forEach(ball => {
      let x = ball.getBoundingClientRect().x
      let y = ball.getBoundingClientRect().y
      ball.style.left = e.pageX  - ball.offsetWidth / 2 -  x + 'px';
      ball.style.top = e.pageY - ball.offsetHeight /2 - y + 'px';
   })
})
