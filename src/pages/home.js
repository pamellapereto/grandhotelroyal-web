import { listAvailableRoomsRequest } from "../api/roomsAPI.js";
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

    const btnSearchRoom = dateSelector.querySelector('button');

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = "2025-09-15"; //Estou setando só para testar pq ainda vamos pegar valor diretamente do input
        const fim = "2025-09-24";
        const qtd = 2;

        try {
            const result = await listAvailableRoomsRequest({inicio, fim, qtd });
            //Após intervalo: preencher as infos dos quartos nos cards ou avisar ao cliente que não há quarto disp.
        }
        catch(error) {
            console.log(error);
        }
    });
    
    
    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    /*Desafio: consertar o bug do carrossel
    em cada card, E AINDA REUTILIZANDO O MESMO
    COMPONENTE*/
    for (var i=0; i < 3; i++) {
        const cards = RoomCard(i);
        cardsGroup.appendChild(cards);
    }
    
    divRoot.appendChild(cardsGroup);



    //Footer
}

