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
const clickScroll = (sec) => {
    sec.scrollIntoView({behaviour : 'smooth'});
}
//callbacks
homeBtn.addEventListener('click',() => {
    clickScroll(sections[0]);
});
aboutBtn.addEventListener('click', () => {
    clickScroll(sections[1]);
});
projectBtn.addEventListener('click',() => {
    clickScroll(sections[2]);
});
contactBtn.addEventListener('click',() => {
    clickScroll(sections[3]);
});
}
clicktoScroll();

//function to dark mode and night mode

const toggleDisplay = () => {



    
}

