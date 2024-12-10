




window.onscroll = () => {
    if (window.scrollY > 50) {
      document.querySelector("#mainNavBar").classList.add("navbarDown");
      document.querySelector(".nav_head ul li a").style.color = "black"
      document
        .querySelector("#logImg")
        .setAttribute("src", "img/logo2.png");
    } else {
      document.querySelector("#mainNavBar").classList.remove("navbarDown");
      document.querySelector("#logImg").setAttribute("src", "img/logo.png");
    }
  };