import CarouselCard from "../components/CarouselCard.js";
import DateSelector from "../components/DateSelector.js";
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

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector);
    
    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    // const cardsGroup = document.createElement('div');
    // cardsGroup.className = "cards";


    const carouselCard = CarouselCard();
    const divCarousel = carouselCard.querySelector('div[id="divCarousel"]');
    
    

    for (var i=0; i < 5; i++) {
            const card = RoomCard(i);
            divCarousel.appendChild(card);
    }





    divRoot.appendChild(divCarousel);




    //Footer
}

