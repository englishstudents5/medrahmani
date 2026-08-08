/*==============================
    MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

/*==============================
    CLOSE MENU WHEN CLICKING LINK
==============================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

/*==============================
    ACTIVE LINK ON SCROLL
==============================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*==============================
    HEADER SHADOW
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 0 20px rgba(57,255,20,.2)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*==============================
    DARK / LIGHT MODE
==============================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});

/*==============================
    COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".card h2");

let counterStarted = false;

function runCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const speed = target / 100;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

}

window.addEventListener("scroll", () => {

    if (!counterStarted && window.scrollY > 200) {

        runCounter();
        counterStarted = true;

    }

});

/*==============================
    SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(
    ".service-box, .project-card, .about-card, .cert-card, .skill"
);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

/*==============================
    SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});
/*=================================
    TYPING EFFECT
=================================*/

const words = [
    "Informatique",
    "Réseaux",
    "Cybersécurité",
    "Linux",
    "Windows",
    "Support IT"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);
    }
    else{

        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = 120;

    if(!deleting && charIndex === currentWord.length + 1){

        deleting = true;
        speed = 1500;

    }
    else if(deleting && charIndex === 0){

        deleting = false;
        wordIndex++;

        if(wordIndex >= words.length)
            wordIndex = 0;

        speed = 300;

    }

    setTimeout(typeEffect,speed);

}

typeEffect();
/*=================================
    SKILL ANIMATION
=================================*/

const skills = document.querySelector(".skills");

window.addEventListener("scroll",()=>{

    if(window.scrollY > skills.offsetTop - 500){

        document.querySelector(".windows").style.width="95%";
        document.querySelector(".linux").style.width="90%";
        document.querySelector(".network").style.width="88%";
        document.querySelector(".cyber").style.width="82%";

    }

});
/*=================================
    SCROLL PROGRESS
=================================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const value =
        window.scrollY / total * 100;

    progress.style.width = value + "%";

});
/*==============================
LOADER
==============================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },900);

});
/*==============================
TOP BUTTON
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
/*==============================
CURSOR
==============================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});
/*==============================
PARTICLES
==============================*/

const particles=document.getElementById("particles");

for(let i=0;i<60;i++){

    const p=document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=
        Math.random()*10+8+"s";

    p.style.animationDelay=
        Math.random()*8+"s";

    p.style.opacity=Math.random();

    particles.appendChild(p);

}
/*==============================
STATISTICS
==============================*/

const statNumbers=document.querySelectorAll(".stat-box h2");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let value=0;

const update=()=>{

value+=target/100;

if(value<target){

counter.innerHTML=Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

statNumbers.forEach(number=>observer.observe(number));
const filterButtons=document.querySelectorAll(".filter-btn");
const projectCards=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.onclick=()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}
else if(card.classList.contains(filter)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

};

});

/*==============================
    CONTACT FORM - EMAILJS
==============================*/

const contactForm = document.getElementById("contact-form");

console.log("Contact form found:", contactForm);
console.log("EmailJS:", typeof emailjs);

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        console.log("FORM SUBMITTED!");

        const button = contactForm.querySelector("button");

        button.disabled = true;
        button.textContent = "Sending...";

        emailjs.sendForm(
            "service_sswcyis",
            "template_2xutfqs",
            contactForm
        )

        .then(function(response) {

            console.log("EMAILJS SUCCESS:", response);

            alert("Message sent successfully!");

            contactForm.reset();

            button.disabled = false;
            button.textContent = "Send Message";

        })

        .catch(function(error) {

            console.error("EMAILJS ERROR:", error);

            alert("Message could not be sent.");

            button.disabled = false;
            button.textContent = "Send Message";

        });

    });

}