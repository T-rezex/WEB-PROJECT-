var scrollElement = document.getElementById("scroll");
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${index * 100}%)`;
  const images = document.querySelectorAll('.slides img');
  images.forEach((img, i) => {
    img.classList.remove('centered');
  });
  images[index].classList.add('centered');
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  const slides = document.querySelector('.slides');
  if (slideIndex < slides.children.length - 1) {
    slideIndex++;
  }
  showSlide(slideIndex);
}

// الحصول على زر تسجيل الدخول ونموذج تسجيل الدخول
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

// الحصول على زر التسجيل ونموذج التسجيل
const signupBtn = document.getElementById('signupBtn');
const signupForm = document.getElementById('signupForm');

// إضافة حدث النقر لزر تسجيل الدخول
loginBtn.addEventListener('click', function() {
  // إظهار نموذج تسجيل الدخول وإخفاء نموذج التسجيل
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// إضافة حدث النقر لزر التسجيل
signupBtn.addEventListener('click', function() {
  // إظهار نموذج التسجيل وإخفاء نموذج تسجيل الدخول
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});

var lastScrollTop = 0;

$(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // Scroll down, show the footer
        $("#footer").css("bottom", "0");
    } else {
        // Scroll up, hide the footer
        $("#footer").css("bottom", "-60px");
    }
    lastScrollTop = st;
});
window.addEventListener("scroll", function() {
  // Calculate the scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Update the element's style based on the scroll position
  if (scrollPosition > 50) {
      scrollElement.style.height = "20px";
      // Add other style modifications as needed
  } else {
      scrollElement.style.height = "100px";
      // Add other style modifications as needed
  }
});

document.getElementById('topPageBtn').addEventListener('click', function() {
  scrollToTop();
});

function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
var lastScrollTop = 0;

document.getElementById("last-modified").innerHTML = document.lastModified;