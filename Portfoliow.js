function downloadCV() {
    const cvURL = "Resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = cvURL;
    anchor.download = "Resume.pdf";
    anchor.click();
    
    window.open(cvURL, '_blank');
  }

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });

        link.classList.add("active");

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  function redirectToActualSite() {
    const actualSiteURL = 'https://github.com/hardikm121';
    window.location.href = actualSiteURL;
  }

  let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
