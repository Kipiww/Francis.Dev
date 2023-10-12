//Function to click navbar to scroll
const clicktoScroll = () => {
//buttons
const aboutBtn = document.getElementById('about');
const projectBtn = document.getElementById('projects');
const contactBtn = document.getElementById('contact');
//sections
const sections = document.querySelectorAll('section');

//func to scroll to view
const clickScroll = (sec) => {sec.scrollIntoView({behaviour : 'smooth'});}
    aboutBtn.addEventListener('click', () => {clickScroll(sections[0]);});
    projectBtn.addEventListener('click',() => {clickScroll(sections[1]);});
    contactBtn.addEventListener('click',() => {clickScroll(sections[2]);});
}
clicktoScroll();

//function to toggle Dark mode

const toggleDisplay = () => {
    const toggleBtn = document.getElementById('toggle');
    const body = document.querySelector('body');
    const icon = document.querySelector('i');
    const span = document.querySelectorAll('span');
    const a = document.querySelectorAll('a');
    const img = document.querySelectorAll('img');
    const contactDiv = document.querySelector('.contact-container')
    //toggle DarkMode
    toggleBtn.addEventListener('click', () => {
        //dark mode
        icon.classList.toggle('active');
        if (icon.classList.contains('active')) {
         icon.classList.remove('bi-moon');
         icon.classList.add('bi-sun');
        } 
        else {
         icon.classList.remove('bi-sun');
         icon.classList.add('bi-moon');
        }
        //DOMS
        body.classList.toggle('dark-mode');
        span.forEach((spans) => {spans.classList.toggle('span-dark');})
       //navs
        const navLinks = Array.from(a).slice(0,5);
        navLinks.forEach((element) => {element.classList.toggle('hover-color')})
        //download cv
        a[5].classList.toggle('cv');
        a[6].classList.toggle('cv');
       
        //links in projects
        const projectLink = Array.from(a).slice(7,13);
        projectLink.forEach((element) => element.classList.toggle('hover-color'))

        //contacts 
        contactDiv.classList.toggle('contact-darkmode');

    });
}
toggleDisplay();

