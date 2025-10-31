import { addItemToHotel_Cart } from "../store/cartStore.js";

function calculoDiaria(checkIn, checkOut) {
    /* Feito para teste:
        const checkIn = "2026-01-01";
        const checkOut = "2026-01-08"; */
    
    const [yin, min, din] = String(checkIn).split("-").map(Number);
    const [yout, mout, dout] = String(checkOut).split("-").map(Number);

    const tzin = Date.UTC(yin, min -1, din);
    const tzout = Date.UTC(yout, mout -1, dout);

    console.log("Milissegundos desde 1970-01-01 00:00:00 " +
        tzin);

    return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24));
}

export default function RoomCard(itemCard, index = 0) {
    const {
        id,
        nome,
        numero,
        qtd_cama_casal,
        qtd_cama_solteiro,
        preco
    } = itemCard || {};

    const title = nome;

    const camas = [
        (qtd_cama_casal != null ? `${qtd_cama_casal} cama(s) de casal` : null),
        (qtd_cama_solteiro != null ? `${qtd_cama_solteiro} cama(s) de solteiro` : null),
    ].filter(Boolean).join(' - ');


    const card = document.createElement('div');
    card.className = "cardContainer";
    card.innerHTML =
    //Bootstrap
    `
    <div class="card" style="width: 18rem;">
        <div id="carouselExampleIndicators-${index}" class="carousel slide">
            <div class="carousel-indicators">
                <button visually-hiddentype="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
  
            <div class="carousel-inner shadow">
                <div class="carousel-item active">
                    <img src="public/assets/images/Palmeiras_logo.svg.webp.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/images/Palmeiras_logo.svg.webp.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/images/Palmeiras_logo.svg.webp.jpg" class="d-block w-100" alt="...">
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
 
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <ul class="list-unstyled mb-2">
                ${camas? `<li>${camas}` : ""}
                ${preco != null ? `<li>Preço diária: R$ ${Number(preco).toFixed(2)}</li>` : ""}
            </ul>
            <a href="#" class="btn btn-primary btn-reservar">Reservar</a>
        </div>
    </div>
    `;

    card.querySelector(".btn-reservar").addEventListener('click', (e) => {
        e.preventDefault();

        //Ler informações setadas nos inputs dateCheckin, dateCheckout e guestAmount (IDs)
        const idDateCheckin = document.getElementById("id-dateCheckIn");
        const idDateCheckout = document.getElementById("id-dateCheckOut");
        const idGuestAmount = document.getElementById("id-guestAmount");

        const inicio = (idDateCheckin?.value || "");
        const fim = (idDateCheckout?.value || "");
        const qtd = parseInt(idGuestAmount?.value || "0", 10);

        /*Validação do preenchimento de infos => contexto: usuário pesquisou quartos disponíveis, mas
          na hora de simplesmente reservar, usuário voltou ao campo de check-in ou check-out
          e limpou a informação de lá, mas não setou uma nova pesquisa p/ buscar novamente quartos*/
        if (!inicio || !fim || Number.isNaN(qtd) || qtd <= 0) {
            console.log("Preencha todos os campos!");
            /* Tarefa 1: Renderizar nesse if() posteriormente um modal do bootstrap!
            https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }
        const daily = calculoDiaria(inicio, fim);
        //Cálculo do subtotal do quarto (preco * nº de diárias)
        const subtotal = parseFloat(preco) * daily;
        const novoItemReserva = {
            id,
            nome,
            checkIn: inicio,
            checkOut: fim,
            guests: qtd,
            daily,
            subtotal
        }
        addItemToHotel_Cart(novoItemReserva);
        //Alerta pode ser trocado por um modal com melhor aparência
        alert(`Reserva do quarto adicionada: ${nome} - Preço/diária: R$ ${preco}
        - Nº de diárias: ${daily} - Subtotal: R$ ${subtotal}`);
    });
    return card;
}