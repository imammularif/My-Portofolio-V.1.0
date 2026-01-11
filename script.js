
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
      container.style.alignItems = "center";   // 🔥 NENGAH
    }

    if (leftBox) {
      leftBox.style.width = "100%";
      leftBox.style.maxWidth = "500px";        // biar gak kepanjangan
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
      observer.unobserve(entry.target); // 🔥 sekali tampil, selesai
    }
  });
}, {
  threshold: 0.2
});

document
  .querySelectorAll(".section-header, .section-divider")
  .forEach(el => observerPEM.observe(el));




// ABOUT

document.addEventListener("DOMContentLoaded", () => {

  /* BOX ANIMATION */
  const boxes = document.querySelectorAll('.box');

  const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 🚀 tampil sekali
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
        observer.unobserve(entry.target); // 🧠 isi sekali, aman
      }
    });
  }, {
    threshold: 0.4
  });

  skills.forEach(skill => skillObserver.observe(skill));

});

// icon animated scroll

const iconItems = document.querySelectorAll('.icon-item');

const iconObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 🚀 muncul sekali, no reset
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
      observer.unobserve(entry.target); // 🔥 stop observing = ga bakal ilang lagi
    }
  });
}, {
  threshold: 0.25
});

timelineItems.forEach(item => timelineObserver.observe(item));



// INTERSECTION OBSERVER (mirip timeline)
const experienceCards = document.querySelectorAll('.experience-card');

const observerExp = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 🔥 muncul sekali, selesai
    }
  });
}, {
  threshold: 0.25
});

experienceCards.forEach(card => observerExp.observe(card));





// paralax
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



// animasi project homepage


const cards = document.querySelectorAll('.project-card');

const observerProj = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
      observer.unobserve(entry.target); // 🧠 sekali tampil, stop
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


// Tap skill mobile

document.querySelectorAll('.box, .small-box').forEach(el => {

  // saat jari menempel
  el.addEventListener('pointerdown', () => {
    el.classList.add('is-active');
  });

  // saat jari dilepas
  el.addEventListener('pointerup', () => {
    el.classList.remove('is-active');
  });

  // kalau geser keluar / cancel
  el.addEventListener('pointerleave', () => {
    el.classList.remove('is-active');
  });

  el.addEventListener('pointercancel', () => {
    el.classList.remove('is-active');
  });

});


// tap edu mobile

document.querySelectorAll('.timeline-box').forEach(box => {

  box.addEventListener('pointerdown', () => {
    box.classList.add('is-active');
  });

  box.addEventListener('pointerup', () => {
    box.classList.remove('is-active');
  });

  box.addEventListener('pointerleave', () => {
    box.classList.remove('is-active');
  });

  box.addEventListener('pointercancel', () => {
    box.classList.remove('is-active');
  });

});


// tap exp mobile
document.querySelectorAll('.experience-card').forEach(card => {

  card.addEventListener('pointerdown', () => {
    card.classList.add('active');
  });

  card.addEventListener('pointerup', () => {
    card.classList.remove('active');
  });

  card.addEventListener('pointerleave', () => {
    card.classList.remove('active');
  });

  card.addEventListener('pointercancel', () => {
    card.classList.remove('active');
  });

});


// tap pro/cer mobile

document.querySelectorAll('.project-card').forEach(card => {

  // saat jari menempel
  card.addEventListener('pointerdown', () => {
    card.classList.add('is-active');
  });

  // saat jari dilepas
  card.addEventListener('pointerup', () => {
    card.classList.remove('is-active');
  });

  // kalau geser keluar / cancel
  card.addEventListener('pointerleave', () => {
    card.classList.remove('is-active');
  });

  card.addEventListener('pointercancel', () => {
    card.classList.remove('is-active');
  });

});


// cv animation

  const cvItems = document.querySelectorAll('.cv-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animasi cuma sekali
      }
    });
  }, {
    threshold: 0.2
  });

  cvItems.forEach(item => observer.observe(item));


// active hover porto


  const currentPage = window.location.pathname.split("/").pop();
  const portfolioPages = ["certificate.html", "mini_project.html"];

  if (portfolioPages.includes(currentPage)) {
    document.getElementById("portfolioBtn").classList.add("active");
  }


  // CONTACT PAGE ANIMATION



  // tap contact mobile

document.querySelectorAll('.contact-box').forEach(box => {
  box.addEventListener('touchstart', () => {
    box.classList.add('tap-active');
  });

  box.addEventListener('touchend', () => {
    box.classList.remove('tap-active');
  });

  box.addEventListener('touchcancel', () => {
    box.classList.remove('tap-active');
  });
});

document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('touchstart', () => {
    icon.classList.add('tap-active');
  });

  icon.addEventListener('touchend', () => {
    icon.classList.remove('tap-active');
  });

  icon.addEventListener('touchcancel', () => {
    icon.classList.remove('tap-active');
  });
});





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
      input.style.border = '2px solid #ff4d4f';
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



























  


















