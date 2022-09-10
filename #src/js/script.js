window.addEventListener("load", function () {
  this.document.querySelector(".load").style.display = "none";
  const archs = document.querySelectorAll(".arch"),
    main = document.querySelector(".main__content"),
    content = document.querySelector(".border_second"),
    map = document.querySelector(".map"),
    menu_items = [...document.querySelectorAll(".menu__item a"), ...document.querySelectorAll(".mobile-nav__item a"), document.querySelector(".home")];
  document.querySelector(".empty").style.height = `${document.querySelector(".main2").scrollHeight - archs[1].scrollHeight}px`;

  content.addEventListener("resize", function () {
    document.querySelector(".empty").style.height = `${document.querySelector(".main2").scrollHeight - archs[1].scrollHeight}px`;
  })
  let menuClick = false
  this.window.addEventListener("scroll", function () {
    const sections = [
      document.getElementById("mobile-project"),
      document.getElementById("mobile-medusa"),
      document.getElementById("mobile-roadmap"),
      document.getElementById("mobile-faq"),
      document.getElementById("first")
    ]
    sections.forEach(section => {
      //проверка не нажат ли якорь, что бы не выделять лишние элементы меню
      if (!menuClick) {
        scrollSectionMobile(section)
      }
    })
  })
  content.addEventListener("scroll", function () {
    archs[1].scrollTop = content.scrollTop;

    //about the project - для появления головы медузы из второй арки//
    const project = document.querySelector("#margin"); //пустой блок перед about the project 
    const prTop = project.getBoundingClientRect().top;
    const mapTop = map.getBoundingClientRect().top;
    if (((prTop + (project.clientHeight - 140) <= window.innerHeight && prTop >= 0) || (prTop <= 0)) && !((mapTop + (project.clientHeight - 140) <= window.innerHeight && mapTop >= 0) || (mapTop <= 0) ) ) {
      document.querySelector(".middle__bg").classList.add("middle__bg_opacity");
      document.querySelector(".middle-stars .stars").style.display = "flex";
    } else {
      document.querySelector(".middle__bg").classList.remove("middle__bg_opacity");
      document.querySelector(".middle-stars .stars").style.display = "none";
    }

    ////////////для art - для появления картинок в блоке арт//////////////
    const art = document.querySelector(".art")
    const artTop = art.getBoundingClientRect().top;
    if (artTop + (art.clientHeight - 140) <= window.innerHeight && artTop >= 0) {
      document.querySelectorAll(".art-img")[0].classList.add("art-img-visible")
      document.querySelectorAll(".art-img")[1].classList.add("art-img-visible")
    } else {
      document.querySelectorAll(".art-img")[0].classList.remove("art-img-visible")
      document.querySelectorAll(".art-img")[1].classList.remove("art-img-visible")
    }
    
    //////////////menu - для выделения элементов меню при скролле////////////
    const sections = [
      document.getElementById("project"),
      document.getElementById("medusa"),
      document.getElementById("expect"),
      document.getElementById("roadmap"),
      document.getElementById("team"),
      document.getElementById("faq"),
      document.querySelector(".dark-wrap")
    ]

    sections.forEach(section => {
      //проверка не нажат ли якорь, что бы не выделять лишние элементы меню
      if (!menuClick) {
        scrollSection(section)
      }
    })


  });

  function scrollSection(section) {
    let sectionsTop = section.getBoundingClientRect().top;
    if (sectionsTop + (section.clientHeight / 2) <= window.innerHeight && sectionsTop >= 0) {
      menu_items.forEach(item => {
        
        if (item.hash.substring(1) == section.id && item.hash.substring(1) != "home" ) {
          item.parentNode.classList.add("menu__active")
        }
        if (item.hash.substring(1) != section.id) {
          item.parentNode.classList.remove("menu__active")
        }
      })
    }
  }
  function scrollSectionMobile(section) {
    let sectionsTop = section.getBoundingClientRect().top;
    if (sectionsTop + 250 <= window.innerHeight && sectionsTop >= 0) {
      menu_items.forEach(item => {
        if (item.hash.substring(1) == section.id && item.hash.substring(1) != "home" && item.hash.substring(1) != "first") {
          item.parentNode.classList.add("mobile-nav__item_active")
        }
        if (item.hash.substring(1) != section.id) {
          item.parentNode.classList.remove("mobile-nav__item_active")
        }
      })
    }
  }

  //EXPECT - Для анимации карточек//
  const artists = document.querySelector(".artists"),
    cards = document.querySelector(".cards"),
    expect = document.querySelector(".expect__text"),
    top2 = document.querySelector(".top"),
    close = document.querySelector(".artists__close");

  artists.style.display = "none";

  //клик на карточки скроллит экран вверх//
  content.addEventListener("click", function (event) {
    let arr = new Array(...cards.childNodes)

    if (event.target == cards || arr.includes(event.target)) {
      try {
        top2.scrollIntoViewIfNeeded(false);
        archs[1].scrollTop -= 30;
      } catch (error) {
        top2.scrollIntoView({
          block: "center"
        });
        archs[1].scrollTop += (archs[1].clientHeight / 2) - 70;
      }
    }
  });
  //показывает блок с карточками//
  cards.addEventListener("click", function () {
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

  //закрывает блок с карточками//
  close.addEventListener("click", function () {
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

  //для скролла по якрорям//
  const scrolling = () => {
    let links = document.querySelectorAll('[href^="#"]');
    let speed = 0.2;

    links.forEach(link => {
      link.addEventListener('click', function (event) {
        let witdhTop = content.scrollTop;
        let hash = this.hash;
        let toBlock = document.querySelector(hash).getBoundingClientRect().top;
        let start = null;
        speed = 0.2
        if(hash.substring(0, 7) != "#mobile"){
          event.preventDefault();
          requestAnimationFrame(step);
        }else{
          menuClick = true
          setTimeout(() => menuClick = false, 600)
          links.forEach(item => {
            if (item.parentNode.classList[1] == "mobile-nav__item_active") {
              item.parentNode.classList.remove("mobile-nav__item_active")
            }
          })
          if (link.hash != "#home" && link.hash != "#mint") {
            link.parentNode.classList.add("mobile-nav__item_active")
          }
        }
        function step(time) {
          if (start === null) {
            start = time;
          }
          let r;
          let progress = time - start;
          r = (toBlock < 0 ? Math.max(witdhTop - progress / speed, witdhTop + toBlock) : Math.min(witdhTop + progress / speed, witdhTop + toBlock));
          if (r < toBlock && r > toBlock - 900) {
            speed += 0.005
          }
          content.scrollTo(0, r - 100);
          if (r != witdhTop + toBlock) {
            speed -= 0.005
            requestAnimationFrame(step);
          }
          links.forEach(item => {
            if (item.parentNode.classList[1] == "menu__active") {
              item.parentNode.classList.remove("menu__active")
            }
          })
          if (link.hash != "#home" && link.hash != "#mint") {
            link.parentNode.classList.add("menu__active")
          }
          
          
          menuClick = true
          setTimeout(() => menuClick = false, 600)
        };
        
      });
    });
  };
  scrolling();
  //кнопка connect//
  const connect = this.document.querySelector(".connect");
  connect.addEventListener('click', connectOpacity)
  function connectOpacity(){
    connect.classList.toggle("connect__opacity")
    setTimeout(() => connect.classList.toggle("connect__opacity"), 2000)
    connect.removeEventListener("click", connectOpacity)
    setTimeout(() => connect.addEventListener('click', connectOpacity), 2200)
  }

  /////////открываем и закрываем блоки вопросов////
  const faqs = this.document.querySelectorAll(".faq__wrap"),
    answers = this.document.querySelectorAll(".answer");
  faqs.forEach((faq) => faq.addEventListener("click", function (e) {
    let item = e.target.closest(".question");
    let span = item.querySelector("span")
    if (item) {
      answers.forEach((answer) => {
        if ([...answer.classList].includes("question__open") && answer != item.querySelector(".answer")) {
          answer.classList.remove("question__open")
          answer.closest(".question").classList.remove("question__border")
          //answer.closest(".question").style.width = "auto";
        }
        if (answer != item.querySelector(".answer")) {
          answer.closest(".question").style.opacity = "0.15"
          
        }
        if ([...item.querySelector(".answer").classList].includes("question__open")) {
          answer.closest(".question").style.opacity = "1"
        }
      })
      item.querySelector(".answer").classList.toggle("question__open")
      item.classList.toggle("question__border")
      item.style.opacity = "1"
    }
  }))
  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }


  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: true
  });
})



// let balls = document.querySelectorAll(".map__circle");

// map.addEventListener("mousemove", function(e) {
//    balls.forEach(ball => {
//       let x = ball.getBoundingClientRect().x
//       let y = ball.getBoundingClientRect().y
//       ball.style.left = e.pageX  - ball.offsetWidth / 2 -  x + 'px';
//       ball.style.top = e.pageY - ball.offsetHeight /2 - y + 'px';
//    })
// })


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 24,
  slidesPerView: '1',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

 
});


const swiperMap = new Swiper('.mobile-map .map__wrap', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 24,
  slidesPerView: '1',
  setWrapperSize: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


const swiperArt = new Swiper('.mobile-arts', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 24,
  slidesPerView: '1',
  
  setWrapperSize: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

 
});



const more = document.querySelector(".team__more");
const teamBlocks = document.querySelectorAll(".team-mobile__hidden .team__line");
more.addEventListener("click", function(){
  more.style.display = "none";
  teamBlocks.forEach(block => {
    block.classList.add("team__line_visible");
  })
})


