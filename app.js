const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


let index = 0;
                const slides = document.querySelectorAll(".slide");
                const slider = document.getElementById("slider");
                
                function showSlide(n) {
                    if (n >= slides.length) index = 0;
                    else if (n < 0) index = slides.length - 1;
                    else index = n;
                    slider.style.transform = `translateX(${-index * 100}%)`;
                }
                function nextSlide() { showSlide(index + 1); }
                function prevSlide() { showSlide(index - 1); }
                setInterval(() => nextSlide(), 3000);


//   counting figure              

// Get allValues using querySelectorAll
let allValues = document.querySelectorAll(".value");

// Start the forEach loop for displaying the values
allValues.forEach((singleValue) => {
  let startValue = 0;
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // Counter for increaing the values & display
  let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;
    // Clearing the interval
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


