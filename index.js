var scrollElement = document.getElementById("scroll");

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
      scrollElement.style.height = "50px";
      document.querySelector("nav").style.opacity = "0";
  } else {
      scrollElement.style.height = "110px";
      document.querySelector("nav").style.opacity = "1";
  }
});

document.getElementById('topPageBtn').addEventListener('click', function() {
  scrollToTop();
});

window.addEventListener("scroll", function() {
  var st = window.scrollY || document.documentElement.scrollTop;
  if (st > lastScrollTop){
      document.getElementById("footer").style.bottom = "0";
  } else {
      document.getElementById("footer").style.bottom = "-60px";
  }
  lastScrollTop = st;
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
var lastScrollTop = 0;

document.getElementById("last-modified").innerHTML = document.lastModified;
