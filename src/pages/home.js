import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import RoomCard from "../components/RoomCard.js";


export default function renderHomePage() {
    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);
    
    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    for (var i=0; i < 3; i++) {
        const cards = RoomCard();
        cardsGroup.appendChild(cards);
    }

    
    divRoot.appendChild(cardsGroup);



    //Footer
}

