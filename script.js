//Function to click navbar to scroll
const clicktoScroll = () => {
//buttons
const homeBtn = document.getElementById('home');
const aboutBtn = document.getElementById('about');
const projectBtn = document.getElementById('projects');
const contactBtn = document.getElementById('contact');
//sections
const sections = document.querySelectorAll('section');

//func to scroll to view
const clickScroll = (sec) => {sec.scrollIntoView({behaviour : 'smooth'});}
//callbacks
    
    aboutBtn.addEventListener('click', () => {clickScroll(sections[0]);});
    projectBtn.addEventListener('click',() => {clickScroll(sections[1]);});
    contactBtn.addEventListener('click',() => {clickScroll(sections[2]);});
}
clicktoScroll();

//function to toggle Dark mode

const toggleDisplay = () => {
    const toggleBtn = document.getElementById('toggle');
    const body = document.querySelector('body');
    const i = document.querySelector('i');
    const span = document.querySelectorAll('span');
    const a = document.querySelectorAll('a');

    //toggle DarkMode
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        span[0].classList.toggle('span-dark');

        const navLinks = Array.from(a).slice(0,5)  
        a.forEach((element) => [
            element.classList.toggle('hover-color')
        ])
    })
};
toggleDisplay();

