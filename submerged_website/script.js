document.addEventListener('mousemove', function(e) {
    let revealArea = document.querySelector('.reveal-area');
    let modules = document.querySelectorAll('.module');
    let x = e.pageX - revealArea.offsetLeft;
    let y = e.pageY - revealArea.offsetTop;

    revealArea.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 100px, transparent 100px, black 150px)`;

    let lightRadius = 150; // Radius of the light effect
    modules.forEach(module => {
        let moduleRect = module.getBoundingClientRect();
        let moduleX = moduleRect.left + window.scrollX + (moduleRect.width / 2);
        let moduleY = moduleRect.top + window.scrollY + (moduleRect.height / 2);
        let deltaX = x - moduleX;
        let deltaY = y - moduleY;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < lightRadius + moduleRect.width / 2) {
            module.style.opacity = 1;
            module.style.transform = 'scale(1.1)';
        } else {
            module.style.opacity = 0;
            module.style.transform = 'scale(1)';
        }
    });
});


document.addEventListener("scroll", function() {
    var header = document.querySelector(".full-page-header");
    var scrollPosition = window.scrollY;
    var opacity = 1 - scrollPosition / 500;
    header.style.backgroundColor = `rgba(0, 0, 0, ${1 - opacity})`;
    header.style.opacity = opacity > 0 ? opacity : 0;
});


document.addEventListener("scroll", function() {
    var header = document.querySelector(".full-page-header");
    var scrollPosition = window.scrollY;
    
    if (scrollPosition < 100) {
        header.style.opacity = 1;
    } else {
        var opacity = 1 - scrollPosition / 500;
        header.style.opacity = opacity > 0 ? opacity : 0;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const mask = document.querySelector('.mask');
    const links = document.querySelectorAll('.spotlight-link');
    const blocks = document.querySelectorAll('.text-block');
    let currentBlockIndex = 0;
    const { mapRange } = gsap.utils;

    function updateLinkVisibility(pos) {
        links.forEach(link => {
            let linkRect = link.getBoundingClientRect();
            let linkCenterX = linkRect.left + (linkRect.width / 2);
            let linkCenterY = linkRect.top + (linkRect.height / 2);
            let distance = Math.sqrt(Math.pow(pos.clientX - linkCenterX, 2) + Math.pow(pos.clientY - linkCenterY, 2));
    
            if (distance < 100) {
                link.style.visibility = 'visible';
            } else {
                link.style.visibility = 'hidden';
            }
        });
    }

    document.addEventListener('pointermove', (pos) => {
        let x = (pos.clientX / window.innerWidth) * 100;
        let y = (pos.clientY / window.innerHeight) * 100;
    
        gsap.set(mask, {
            '--mouse-x': `${x}%`, 
            '--mouse-y': `${y}%`
        });
    
        updateLinkVisibility(pos);
    });

    setTimeout(() => {
        const subtitle = document.getElementById('subtitle');
        subtitle.style.visibility = 'visible';
    }, 3500);
});




