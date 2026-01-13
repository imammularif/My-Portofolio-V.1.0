// PWA

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  clients.claim();
});


/* ========================== LAYOUT RESPONSIVE ============================== */

function handleResponsive() {
  const container = document.querySelector(".container");
  const leftBox = document.querySelector(".left-box");
  const rightBox = document.querySelector(".right-box");
  const nav = document.querySelector(".topnav");
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-menu");

if (window.innerWidth > 768 && btn && menu) {
  menu.classList.remove("show");
  btn.innerHTML = "☰";
}

// ===== MOBILE =====
  if (window.innerWidth <= 768) {
    // ===== MOBILE =====
    if (container) {
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.alignItems = "center"; 
    }

    if (leftBox) {
      leftBox.style.width = "100%";
      leftBox.style.maxWidth = "500px";     
    }

    if (rightBox) {
      rightBox.style.width = "100%";
      rightBox.style.maxWidth = "500px";
    }

    if (nav) {
      nav.style.flexWrap = "wrap";
      nav.style.justifyContent = "flex-start";
    }

  } else {
    // ===== DESKTOP =====
    if (container) {
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.alignItems = "stretch";
    }

    if (leftBox) {
      leftBox.style.width = "45%";
      leftBox.style.maxWidth = "none";
    }

    if (rightBox) {
      rightBox.style.width = "55%";
      rightBox.style.maxWidth = "none";
    }

    if (nav) {
      nav.style.flexWrap = "nowrap";
      nav.style.justifyContent = "center";
    }
  }
}

// jalan pertama kali
handleResponsive();

// jalan tiap resize
window.addEventListener("resize", handleResponsive);


/* HAMBURGER */

function toggleMenu(btn) {
  const menu = document.querySelector(".nav-menu");

  if (!menu) return;

  menu.classList.toggle("show");

  btn.innerHTML = menu.classList.contains("show") ? "✕" : "☰";
}

/* DROPDOWN (MOBILE) */

function toggleDropdown() {
  if (window.innerWidth <= 768) {
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }
}


// animation pembatas
const observerPEM = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2
});

document
  .querySelectorAll(".section-header, .section-divider")
  .forEach(el => observerPEM.observe(el));




// ABOUT PAGE ANIMATIONS

document.addEventListener("DOMContentLoaded", () => {

  /* BOX ANIMATION */
  const boxes = document.querySelectorAll('.box');

  const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3
  });

  boxes.forEach(box => boxObserver.observe(box));

  /* SKILL BAR ANIMATION */
  const skills = document.querySelectorAll('.skill');

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.fill');
        const percent = fill.dataset.percent;

        fill.style.width = percent + '%';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  skills.forEach(skill => skillObserver.observe(skill));

});



// ICON PAGE ANIMATION

const iconItems = document.querySelectorAll('.icon-item');

const iconObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2
});

iconItems.forEach(item => iconObserver.observe(item));



// ANIMATED EDUCATION TIMELINE
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.25
});

timelineItems.forEach(item => timelineObserver.observe(item));



// ANIMATED EXPERIENCE CARDS
const experienceCards = document.querySelectorAll('.experience-card');

const observerExp = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.25
});

experienceCards.forEach(card => observerExp.observe(card));



// PARALLAX SCROLLING
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// animated nav scroll
let lastScroll = 0;
const navbar = document.querySelector('.topnav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove('hide');
    navbar.classList.add('show');
    return;
  }

  if (currentScroll > lastScroll) {
    // scroll ke bawah → sembunyikan navbar
    navbar.classList.add('hide');
    navbar.classList.remove('show');
  } else {
    // scroll ke atas → munculkan navbar
    navbar.classList.add('show');
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});


// smooth paralax

const bg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  bg.style.setProperty(
    '--parallax',
    window.scrollY * 0.25 + 'px'
  );
});



// restart animation nav+parrax
  window.addEventListener('load', () => {
    const profileSection = document.querySelector('.profile');
    profileSection.classList.add('show');
  });



  window.addEventListener('load', () => {
    const navbar = document.querySelector('.topnav');
    navbar.classList.add('show');
  });


  // about page restart animation/chagepage
 
  window.addEventListener("load", () => {
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("active");
    });
  });



// PROJECT/CERTIFICATE CARDS ANIMATION

const cards = document.querySelectorAll('.project-card');

const observerProj = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observerProj.observe(card));




// ABOUT MENUS

  const reveals = document.querySelectorAll(".reveal");

  const observerREV = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          // RESET SAAT KELUAR LAYAR
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  reveals.forEach(el => observerREV.observe(el));





// cv animation

  const cvItems = document.querySelectorAll('.cv-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2
  });

  cvItems.forEach(item => observer.observe(item));



// back icon ham
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");


  function syncHamburgerIcon() {
    hamburger.textContent = navMenu.classList.contains("show")
      ? "✕"
      : "☰";
  }


  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    syncHamburgerIcon();
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      syncHamburgerIcon();
    });
  });

 
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show");
      syncHamburgerIcon();
    }
  });
});



// typing animation
const typingText = document.querySelector(".typing-text");

const texts = [
  "Imammul Arif",
  "Web Developer",
  "Future AI Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = texts[textIndex];

  if (!isDeleting) {
    typingText.textContent = current.slice(0, charIndex++);
  } else {
    typingText.textContent = current.slice(0, charIndex--);
  }

  let speed = isDeleting ? 45 : 80;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();



// input error/top upp sucsess

const form = document.querySelector('.contact-form');
const inputs = form.querySelectorAll('input, textarea');
const button = form.querySelector('button');

// Ambil toast
const toast = document.getElementById('toastSuccess');

// Buat span error di atas input (sekali saja)
inputs.forEach(input => {
  const span = document.createElement('span');
  span.classList.add('error-msg');
  span.textContent = ' '; 
  input.insertAdjacentElement('beforebegin', span);
});

button.addEventListener('click', (e) => {
  e.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    const errorMsg = input.previousElementSibling;

    if (!input.value.trim()) {
      errorMsg.textContent = 'Harap diisi dulu';
      errorMsg.classList.add('show');
      // input.style.border = '2px solid #ff4d4f';
      isValid = false;
    } else {
      errorMsg.textContent = ' ';
      errorMsg.classList.remove('show');
      input.style.border = 'none';
    }
  });

  if (isValid) {
 
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);

    form.reset();

    // reset error state 
    inputs.forEach(input => {
      const errorMsg = input.previousElementSibling;
      errorMsg.textContent = ' ';
      errorMsg.classList.remove('show');
      input.style.border = 'none';
    });
  }
});



// btn scroll/animated
document.addEventListener("DOMContentLoaded", () => {
  const scrollItems = document.querySelectorAll(".certificate-card, .view-all .btn-primary");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Jangan unobserve kalau mau animasi bisa retrigger di mobile
          // observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1 // lebih rendah biar mobile detect lebih awal
    }
  );

  scrollItems.forEach(el => observer.observe(el));
});


// contact /send

const scrollElements = document.querySelectorAll('.contact-box, .contact-form, .contact-image');

function handleScrollAnimation() {
  const windowHeight = window.innerHeight;

  scrollElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    // tambah class sekali saja
    if(rect.top < windowHeight - 50 && !el.classList.contains('scroll-active')) {
      el.classList.add('scroll-active');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);



// 3 boxes

document.addEventListener("DOMContentLoaded", function() {
  // semua elemen yang mau fade
  const revealElements = Array.from(document.querySelectorAll(
    '.small-box, .certificate-card, .certificate-year, .project-timeline-item'
  ));
  const windowHeight = window.innerHeight;

  function revealOnScroll() {
    // ambil elemen yang belum aktif
    const hiddenElements = revealElements.filter(el => !el.classList.contains('active'));

    // ambil elemen yang terlihat saat ini (apapun arah scroll)
    const visibleElements = hiddenElements.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });

    // tambahkan stagger per batch
    visibleElements.forEach((el, i) => {
      el.style.transitionDelay = (i * 0.15) + 's';
      el.classList.add('active');
    });
  }

  // jalankan sekali saat load → elemen yang sudah visible langsung muncul
  revealOnScroll();

  // jalankan setiap scroll
  window.addEventListener('scroll', revealOnScroll);
});



// icon fade
document.addEventListener("DOMContentLoaded", function() {
  const icons = Array.from(document.querySelectorAll('.icon-item'));
  const windowHeight = window.innerHeight;

  function revealIcons() {
    // elemen yang belum aktif
    const hiddenIcons = icons.filter(el => !el.classList.contains('show'));

    // ambil elemen yang terlihat saat ini
    const visibleIcons = hiddenIcons.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });

    // tambahkan stagger per batch
    visibleIcons.forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's'; // bisa diubah sesuai selera
      el.classList.add('show');
    });
  }

  // jalankan sekali saat load → elemen visible langsung muncul
  revealIcons();

  // jalankan tiap scroll
  window.addEventListener('scroll', revealIcons);
});


// project fade index
document.addEventListener("DOMContentLoaded", function() {
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const windowHeight = window.innerHeight;

  function revealCards() {
    // elemen yang belum aktif
    const hiddenCards = cards.filter(el => !el.classList.contains('show'));

    // ambil elemen yang terlihat saat ini
    const visibleCards = hiddenCards.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });

    // tambahkan stagger per batch
    visibleCards.forEach((el, i) => {
      el.style.transitionDelay = (i * 0.15) + 's';
      el.classList.add('show');
    });
  }

  // jalankan sekali saat load → elemen visible langsung muncul
  revealCards();

  // jalankan tiap scroll
  window.addEventListener('scroll', revealCards);
});


// text area fade
document.addEventListener("DOMContentLoaded", function() {
  const elements = Array.from(document.querySelectorAll(
    '.contact-form, .contact-form h2, .contact-form p, .contact-form input, .contact-form textarea, .contact-form button'
  ));
  const windowHeight = window.innerHeight;

  function revealContact() {
    // elemen yang belum aktif
    const hiddenElements = elements.filter(el => !el.classList.contains('active'));

    // ambil elemen yang terlihat saat ini
    const visibleElements = hiddenElements.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });

    // tambahkan stagger per batch
    visibleElements.forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's';
      el.classList.add('active');
    });
  }

  // jalankan sekali saat load → elemen visible langsung muncul
  revealContact();

  // jalankan tiap scroll
  window.addEventListener('scroll', revealContact);
});


// fade contact box
document.addEventListener("DOMContentLoaded", function() {
  const elements = Array.from(document.querySelectorAll('.contact-box, .contact-form, .contact-image'));
  const windowHeight = window.innerHeight;

  function revealElements() {
    // ambil elemen yang belum aktif
    const hiddenElements = elements.filter(el => !el.classList.contains('scroll-active'));

    // ambil elemen yang terlihat saat ini
    const visibleElements = hiddenElements.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });

    // stagger per batch
    visibleElements.forEach((el, i) => {
      el.style.transitionDelay = (i * 0.15) + 's';
      el.classList.add('scroll-active');
    });
  }

  // jalankan sekali saat load → elemen visible langsung muncul
  revealElements();

  // jalankan tiap scroll
  window.addEventListener('scroll', revealElements);
});
































  





























  


















