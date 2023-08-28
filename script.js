// Example 1: Display a pop-up message when a button is clicked
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// Example 2: Toggle a navigation menu for mobile devices
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu');
});

// Example 3: Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
