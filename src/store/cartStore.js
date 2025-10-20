/*  Fluxo: Usuário faz login → filtra quartos por período (check-in/check-out) → seleciona um
quarto para reservar → cria-se um pedido com esse quarto → usuário pode adicionar mais reservas
ao mesmo pedido → finaliza o pedido
Pedido armazenado como rascunho no localStorage: getItem() para obter dados, setItem() para adicionar ou atualizar,
removeItem() para excluir  */
const key = "hotel_cart";
/* Abertura de um pedido no localStorage*/
export function setCart(hotel_cart) {
    localStorage.setItem(key, JSON.stringify(hotel_cart));
}
export function getCart() {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { status: "draft", items: []};
    } catch {
      return {status: "draft", items: []};
    }
}

export function addItemToHotel_Cart(item) {
    const hotel_cart = getCart();
    hotel_cart.items.push(item);
    setCart(hotel_cart);
    return hotel_cart;
}

export function removeItemFromHotel_Cart(i) {
    const hotel_cart = getCart();
    hotel_cart.items.splice(i, 1);
    setCart(hotel_cart);
    return hotel_cart;
}
export function clearHotel_Cart() {
    setCart({
            status: "draft",
            items: []
        });
}

export function getTotalItems() {
    const { items } = getCart();
    const total = items.reduce((acc, it) => 
        acc + Number(it.subtotal || 0), 0
    );
    return {
        total,
        qtde_items: items.length
    };
}