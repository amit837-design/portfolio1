//changing the active class and it's color
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    function updateActiveNav() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add active class to the corresponding nav link
        const activeLink = document.querySelector(`a[href="#${sections[index].id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
});

//the theme color 
const uiverseElement = document.querySelector('.uiverse');
const tooltip = document.querySelector('.tooltip');

uiverseElement.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent event from bubbling up to the document
    this.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!uiverseElement.contains(event.target)) {
        uiverseElement.classList.remove('active');
    }
});


//changing the style sheet for {var(--skin-color)}
document.addEventListener('DOMContentLoaded', () => {
    const colorLink = document.getElementById('color-link');
    function changeColorStyle(color) {
        colorLink.href = `css/skins/${color}.css`;
    }

    document.querySelectorAll('.color-option').forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            changeColorStyle(color);
        });
    });
});



// The aside for media screen
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.getElementById('nav-toggler');
    const aside = document.querySelector('.aside');
    let isAsideVisible = false;

    navToggler.addEventListener('click', function(event) {
        event.stopPropagation();
        navToggler.classList.toggle('active'); // Toggle the active class

        if (isAsideVisible) {
            aside.style.display = 'none';
        } else {
            aside.style.display = 'block';
        }
        isAsideVisible = !isAsideVisible;
    });

    document.addEventListener('click', function(event) {
        if (isAsideVisible && !aside.contains(event.target) && !navToggler.contains(event.target)) {
            aside.style.display = 'none';
            isAsideVisible = false;
            navToggler.classList.remove('active'); 
        }
    });

    aside.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});



//text scrambling
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('texting');
    const texts = ["Seo Marketer", "Logo Designer", "Key Word Researcher"];
    const typingSpeed = 100; 
    const eraseSpeed = 100;  
    const delayBetween = 1000; 

    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function type() {
        const currentText = texts[textIndex];

        textElement.style.width = `${currentText.length + 1}ch`;

        if (!isErasing) {
            textElement.textContent = currentText.slice(0, charIndex++);
            if (charIndex > currentText.length) {
                isErasing = true;
                setTimeout(type, delayBetween);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            textElement.textContent = currentText.slice(0, charIndex--);
            if (charIndex < 0) {
                isErasing = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, delayBetween);
            } else {
                setTimeout(type, eraseSpeed);
            }
        }
    }

    type();
});
