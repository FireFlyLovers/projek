// script.js
console.log("Hello from external JavaScript file!");

// Contoh fungsi sederhana
function showAlert() {
  alert("Button clicked!");
}

// Menambahkan event listener ke tombol
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.submit-button');
  if (button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah form submission
      showAlert();
    });
  }
});

// script.js

// Fungsi untuk smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk membuat navbar sticky saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Animasi fade-in untuk elemen saat di-scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const nameInput = document.querySelector('input[name="first_name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        e.preventDefault();
        alert('Please fill in all fields');
    }
});