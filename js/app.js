/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'Backend Engineer', 'FullStack Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
});



























// const header = document.createElement('header');
// header.setAttribute('class', 'header');

// const linkOne = document.createElement('a');
// linkOne.setAttribute('href', '#');

// linkOne.setAttribute('class', 'logo');

// linkOne.textContent = 'Portfolio';


// const icon = document.createElement('i');

// icon.setAttribute('class', 'bx bx-menu');

// const nav = document.createElement('nav');
// nav.setAttribute('class', 'navbar');

// const nestedLinkOne = document.createElement('a');
// const nestedLinkTwo = document.createElement('a');
// const nestedLinkThree = document.createElement('a');
// const nestedLinkFour = document.createElement('a');
// const nestedLinkFive = document.createElement('a');

// nestedLinkOne.setAttribute('href', 'home');
// nestedLinkTwo.setAttribute('href', 'about');
// nestedLinkThree.setAttribute('href', 'services');
// nestedLinkFour.setAttribute('href', 'portfolio');
// nestedLinkFive.setAttribute('href', 'contact');


// nestedLinkOne.setAttribute('class', 'active')
// nestedLinkOne.textContent = 'Home';
// nestedLinkTwo.textContent = 'About';
// nestedLinkThree.textContent = 'Services';
// nestedLinkFour.textContent = 'Portfolio';
// nestedLinkFive.textContent = 'Contact';

// nav.append(nestedLinkOne);
// nav.append(nestedLinkTwo);
// nav.append(nestedLinkThree);
// nav.append(nestedLinkFour);
// nav.append(nestedLinkFive);

// header.append(linkOne);
// header.append(icon);
// header.append(nav);

// const body = document.getElementsByTagName('body')[0];

// const homeSection = document.getElementById('home');
// //------- creating section here --------
// const section = document.createElement('section');
// section.setAttribute('class', 'home');
// section.setAttribute('id', 'home');
// console.log(section);
// const sectionDiv = document.createElement('div')
// const h3Hello = document.createElement('h3');
// h3Hello.textContent = "Hello, It's Me";
// const h1Name = document.createElement('h1');
// h1Name.textContent = 'John Kendric';
// const h3Description = document.createElement('h3');
// h3Description.textContent = "And I'm a Frontend Developer";
// const p = document.createElement('p');
// p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus saepe doloremque, rerum minus.'
// const socialDiv = document.createElement('div');
// socialDiv.setAttribute('class', 'social-media');

// const socialLinkOne = document.createElement('a')
// socialLinkOne.setAttribute('href', '#');
// const iFacebook = document.createElement('i');
// iFacebook.setAttribute('class', 'bx bxl-facebook');
// socialLinkOne.append(iFacebook);

// const socialLinkTwo = document.createElement('a')
// socialLinkTwo.setAttribute('href', '#');
// const iInstagram = document.createElement('i');
// iInstagram.setAttribute('class', 'bx bxl-instagram');
// socialLinkTwo.append(iInstagram);

// const socialLinkThree = document.createElement('a')
// socialLinkThree.setAttribute('href', '#');
// const iLinkedIn = document.createElement('i');
// iLinkedIn.setAttribute('class', 'bx bxl-linkedin-square');
// socialLinkThree.append(iLinkedIn);

// const socialLinkFour = document.createElement('a')
// socialLinkFour.setAttribute('href', '#');
// const iTwitter = document.createElement('i');
// iTwitter.setAttribute('class', 'bx bxl-twitter');
// socialLinkFour.append(iTwitter);

// socialDiv.append(socialLinkOne);
// socialDiv.append(socialLinkTwo);
// socialDiv.append(socialLinkThree);
// socialDiv.append(socialLinkFour);
// console.log(socialDiv);

// const buttonLink = document.createElement('a');
// buttonLink.setAttribute('href', '#');
// buttonLink.setAttribute('class', 'btn');
// buttonLink.textContent = 'Download CV';

// const homeDiv = document.createElement('div');
// homeDiv.setAttribute('class', 'home-img');
// const img = document.createElement('img');
// img.setAttribute('src', './images/personal-portfolio-pic.png')
// img.setAttribute('alt', 'profile-picture');
// homeDiv.append(img);
// console.log(homeDiv);
// sectionDiv.append(h3Hello);
// sectionDiv.append(h1Name);
// sectionDiv.append(h3Description);
// sectionDiv.append(p);
// sectionDiv.append(socialDiv);
// sectionDiv.append(buttonLink);
// console.log(sectionDiv);
// section.append(sectionDiv);
// section.append(homeDiv);
// console.log(section);
// //------- inserting elements below here ------
// const aboutSection = document.getElementById('about');
// body.insertBefore(header, aboutSection);
// body.insertBefore(section, aboutSection);

