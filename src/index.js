import './style.css';
import homepage from './home';
import menu from './menu';
import about from './about'

homepage();

const homeBtn = document.querySelector('.homeBtn');
homeBtn.onclick = () => {
    homepage();
}

const menuBtn = document.querySelector('.menuBtn');
menuBtn.onclick = () => {
    content.classList.add('transition');
    setTimeout(() => {
        content.classList.remove('transition');        
    }, 500);
    menu();
}

const aboutBtn = document.querySelector('.aboutBtn');
aboutBtn.onclick = () => {
    content.classList.add('transition');
    setTimeout(() => {
        content.classList.remove('transition');        
    }, 500);
    about();
}

