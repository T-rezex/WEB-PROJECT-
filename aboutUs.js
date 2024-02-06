// Get the element with ID "scroll"
var scrollElement = document.getElementById("scroll");

 // Add a scroll event listener to the window
    window.addEventListener("scroll", function() {
        // Calculate the scroll position
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Get the header element with the ID "scroll"
        var scrollElement = document.getElementById("scroll");

        // Get the ul element within the nav
        var ulElement = scrollElement.getElementsByTagName("ul")[0];

        // Update the element's style based on the scroll position
        if (scrollPosition > 50) {
            scrollElement.style.height = "50px";
            // Hide the list when scrolled
            ulElement.style.display = "none";
            // Add other style modifications as needed
        } else {
            scrollElement.style.height = "100px";
            // Show the list when not scrolled
            ulElement.style.display = "block";
            // Add other style modifications as needed
        }
    });

document.addEventListener("DOMContentLoaded", function() {

    var complaintForm = document.getElementById("complaintForm");
    if (complaintForm) {
        complaintForm.addEventListener("submit", function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Show an alert
            showAlert();
        });
    }

    // Function to show an alert
    function showAlert() {
        alert("Your complaint was submitted successfully!");
    }
});
