$(document).ready(function () {
  const toggleMNR = document.querySelector("#mnr-button");
  const menuRight = document.querySelector(".mnr-parent");

  toggleMNR.addEventListener("click", function () {
    if (menuRight.classList.contains("show")) {
      menuRight.classList.remove("show");
    } else {
      menuRight.classList.add("show");
    }
  });
  
});

$(document).ready(function () {
  var showMNL = document.querySelector("#mnlButtonShow");
  var menuLeft = document.querySelector(".mnl");
  var overpage = document.querySelector(".overpage");

  showMNL.addEventListener("click", function () {
    if (menuLeft.classList.contains("show")) {
      menuLeft.classList.remove("show");
      overpage.classList.remove("show");
    } else {
      menuLeft.classList.add("show");
      overpage.classList.add("show");
    }
  });

  $('.overpage').click((event) => {
    if (!$(event.target).closest('.mnl').length) {
      // the click occured outside '#element'
      menuLeft.classList.remove("show");
      overpage.classList.remove("show");
    }
  });
});