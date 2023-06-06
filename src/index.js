import './css/menu.css';
import './css/navbar.css';
import firstLoad from './functions/firstLoad';
import menu from './pages/menu';
import clearContent from './functions/clearContent';
import about from './pages/about';

firstLoad(); //will load html on startup

const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

menuButton.addEventListener('click', () => {
    clearContent();
    menu();
})

aboutButton.addEventListener('click', () => {
    clearContent();
    about(); 
})