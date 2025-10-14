/*PARA AMANHÃ, 08/10
  - Criar um componente  chamado Modal.js e inicializá-lo na página home.js
    referente às tarefas 1, 2 e 4 abaixo
  - Criar um componente Spinner.js e inicializá-lo na página home.js referente à tarefa 3*/

import { listAvailableRoomsRequest } from "../api/roomsAPI.js";
import CardLounge from "../components/CardLounge.js";
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

    /*Criar constante que armazene o valor da data de hoje*/
    const dateToday = new Date().toISOString().split("T")[0];
    // console.log(dateToday);

    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date"]');
    dateCheckIn.min = dateToday;
    dateCheckOut.min = dateToday;
    
    const guestAmount = dateSelector.querySelector('select');
    const btnSearchRoom = dateSelector.querySelector('button');

    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";
    
    
    const cardsGroupInfra = document.createElement('div');
    cardsGroupInfra.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso hotel";
    tituloInfra.style.textAlign = "center";


    /*Anterior à pesquisa: aparecerá o card da infraestrutura do hotel]
    path: é nome do arquivo que está em assets/images */
    const loungeItems = [
            {path: "restaurante.jpg", title:
                "Restaurante", text: "Nosso restaurante"
                 + " é um espaço agradável e familiar!"},

            {path: "spa.jpg", title: "SPA",
                 text: "Nosso SPA é ideal para"
                 + " momentos de relaxamento!"},

            {path: "bar.jpg", title: "Bar",
                 text: "Nosso bar ofnerece"
                 + " drinks sem metanol, confia!"}
    ];

    /*Percorre a array loungeItems*/
    for (let i = 0; i < loungeItems.length; i++) {
         const cardLounge = CardLounge(loungeItems[i], i);
         cardsGroupInfra.appendChild(cardLounge);   //AQUI FOI MUDADO PARA QUE cardsGroupInfra incorpore cada card de infraestrutura do hotel
    }

    /*A depender da data de check-in, será
    calculado o mínimo para a data de check-out (o mínimo de diárias)*/
    function getMinDateCheckout(dateCheckIn) {
        const minDaily = new Date(dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);  /*Nº mínimo de diárias*/
        return minDaily.toISOString().split('T')[0];
    } 

    /*Evento para monitorar a alteração na data de check-in
    para calcular o mínimo do check-out e verificar
    se check-out é posterior a check-in */

    //dateCheckIn.addEventListener("change", function() {
    dateCheckIn.addEventListener("change", async (e) => {
        //Se houver um valor válido em dateCheckin
        if (dateCheckIn.value) {
            const minDateCheckout = getMinDateCheckout(dateCheckIn.value);
            dateCheckOut.min = minDateCheckout;
        
        //Se já houver uma data de check-out selecionada e for inválida
            if (dateCheckOut.value && dateCheckOut.value <= dateCheckIn.value) {
                dateCheckOut.value = "";
                alert("A data de check-out deve ser posterior ao check-in!");
                /* Estou utilizando alerta porque EU, PROFESSORA, não tenho
                um modal, vocês deveriam já ter e chamá-lo no lugar do alert() */ 
            }
        }
    });

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qtd = parseInt(guestAmount?.value || "0", 10);

        //Validação do preenchimento de infos
        if (!inicio || !fim || Number.isNaN(qtd) || qtd <= 0) {
            console.log("Preencha todos os campos!");
            /* Tarefa 1: Renderizar nesse if() posteriormente um modal do bootstrap!
            https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }

        /*OBS.: falta impedir que o usuário pesquise por uma data passada!*/
        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            console.log("A data de check-out deve ser posterior ao check-in!");
            /* Tarefa 2: Renderizar nesse if() posteriormente um modal do bootstrap!
            https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }

        console.log("Buscando quartos disponíveis...");
        /* Tarefa 3: Renderizar na tela um símbolo de loading (spinner do bootstrap)!
        https://getbootstrap.com/docs/5.3/components/spinners/ */

        try {
            const result = await listAvailableRoomsRequest({inicio, fim, qtd });
            if (!result.length) {
                console.log("Nenhum quarto disponível para esse período!");
                /* Tarefa 4: Renderizar nesse if() posteriormente um modal do bootstrap!
                https://getbootstrap.com/docs/5.3/components/modal/ */
                return;
            }
            cardsGroup.innerHTML = '';
            result.forEach((itemCard, i) => {
                cardsGroup.appendChild(RoomCard(itemCard, i));
            });
            
        } 
        catch(error) {
            console.log(error);
        }
    });


    divRoot.appendChild(cardsGroup);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardsGroupInfra);


    //Footer
}

