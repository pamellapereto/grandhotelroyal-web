import { finishedOrder } from "../api/orderAPI.js";
import Navbar from "../components/Navbar.js";
import { clearHotel_Cart, getCart, getTotalItems } from "../store/cartStore.js";
//Importar componente Footer

export default function renderCartPage() {
  //Navbar
  const nav = document.getElementById("navbar");
  nav.innerHTML = "";
  const navbar = Navbar();
  nav.appendChild(navbar);

  //Root (corpo da página)
  const divRoot = document.getElementById("root");
  divRoot.innerHTML = "";

  const reservations = getCart();
  const total = getTotalItems();

  const container = document.createElement("div");
  container.className = "container my-4";

  const header = document.createElement("div");
  header.className = "d-flex align-items-center justify-content-between mb-3";

  //Cabeçalho da tabela
  header.innerHTML = `
        <h3 class="mb-0">Reservas</h3>
        <div>
            <button id="btnClear" class="btn btn-outline-danger btn-sm">Limpar carrinho</button>
        </div>
    `;
  //Tabela
  const table = document.createElement("div");
  if (reservations.length === 0) {
    table.innerHTML = `<div class="alert alert-info">Nenhuma reserva no carrinho.</div>`;
  } else {
    table.innerHTML = `
            <div class="table-responsive">
                <table class="table table-striped table-hover align-middle">
                    <thead class="table-success">
                        <!-- Colunas da tabelas -->
                        <tr>
                            <th>Nome do quarto</th>
                            <th>Data de check-in</th>
                            <th>Data de check-out</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reservations
                          .map(
                            (item) =>
                              `
                            <tr>
                                <td>${item.nome}</td> 
                                <td>${item.checkIn}</td>
                                <td>${item.checkOut}</td>
                                <td>R$ ${item.subtotal}</td>
                            </tr>
                            `
                          )
                          .join("")}
                    </tbody>
                    <tfoot>
                            <tr>
                                <th><th>
                                <th>
                                    <h3 style="font-size: 19px;">Total: R$ ${total}</h3>
                                </th>
                                <th>
                                    <button id="btnEscolherPag" class="btn btn-outline-success btn-sm" 
                                    data-bs-toggle="modal" data-bs-target="#ctaModal">Escolher pagamento</button>
                                    <div class="modal fade" id="ctaModal" tabindex="-1" aria-labelledby="ctaModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="ctaModalLabel">Forma de pagamento</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                            <div class="mb-3">
                                                <label>Pix</label>
                                                <input type="radio" name="metodoPagamento" value="Pix">
                                                <br>
                                                <label>Crédito</label>
                                                <input type="radio" name="metodoPagamento" value="Crédito">
                                                <br>
                                                <label>Débito</label>
                                                <input type="radio" name="metodoPagamento" value="Débito">
                                            </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" id="btnFinalizar" class="btn btn-primary">Finalizar compra</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </th>
                            </tr>
                    </tfoot>
                </table>
                
            </div>
        `;
  }
  container.appendChild(header);
  container.appendChild(table);
  divRoot.appendChild(container);

  const btnClear = document.getElementById("btnClear");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      clearHotel_Cart();
      renderCartPage();
    });
  }

  const btnFinalizar = document.getElementById("btnFinalizar");
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", async () => {
      const metodoPagamento = "pix"; //Por enquanto! Assim que testado, colocamos um modal
      try {
        const result = await finishedOrder(metodoPagamento, reservations);
        if (result.ok) {
          //Modal de compra efetuado com sucesso!
          alert("Compra efetuada com sucesso!");
          clearHotel_Cart();
          renderCartPage();
        } else {
          alert(result.message || "Erro ao realizar reserva.");
        }
      } catch (error) {
        alert(error?.message || "Falha na comunicação com o servidor");
      }
    });
  }
}
