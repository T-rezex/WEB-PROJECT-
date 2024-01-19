// Get the element with ID "scroll"
var scrollElement = document.getElementById("scroll");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Calculate the scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Update the element's style based on the scroll position
    if (scrollPosition > 50) {
        scrollElement.style.height = "50px";
        // Add other style modifications as needed
    } else {
        scrollElement.style.height = "100px";
        // Add other style modifications as needed
    }
});
// JavaScript for scrolling to the top when the button is clicked
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
