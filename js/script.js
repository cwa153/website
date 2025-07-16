const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  if (barsBox) {
    barsBox.classList.remove('active');
    setTimeout(() => {
      barsBox.classList.add('active');
    }, 1100);
  }

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();

      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();

    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');
  });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  portfolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });
  portfolioDetails[index].classList.add('active');

};

arrowRight.addEventListener('click', () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove('disabled');
  } else {
    index = 5;
    arrowRight.classList.add('disabled');
  }
  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  }
  else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activePortfolio();
});

  //-------------------------------------------------------//
 //----------Contact Me Responsive Code-------------------//
//-------------------------------------------------------//


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

  // WhatsApp message link
  // const whatsappNumber = "91738"; // Replace with your full WhatsApp number (no +)
  // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
 // window.open(whatsappUrl, "_blank");

  // Gmail compose link
  const mailToLink = `mailto:chiku042151173@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
  window.open(mailToLink, "_blank");

  // Optionally, reset form after sending
  document.getElementById("contactForm").reset();
});


  //-------------------------------------------------------//
 //--------------Footer Responsive Code-------------------//
//-------------------------------------------------------//

  // Optional: Update year automatically
  document.querySelector('.footer-bottom p').innerHTML =
    `&copy; ${new Date().getFullYear()} Aditya Kumar Singh. All rights reserved.`;


//-------------------------------------------------------//
 //----------Home image Slide Animation-------------------//
//-------------------------------------------------------//

  let currentIndex = 0;
  const images = document.querySelectorAll(".slider-img");

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 2000);



    // Disable Right Click
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Disable Common Dev Tools Shortcuts
    document.addEventListener('keydown', function (e) {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    });

    // Obfuscation Example (basic)
    (function() {
      const msg = "Thanks for your interest!";
      console.log(msg);
    })();
