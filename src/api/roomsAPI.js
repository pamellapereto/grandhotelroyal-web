/* getToken() é uma função que retorna o valor do token armazenado no localStorage(),
para que o usuário permaneça logado mesmo que mude de página e não tenha que "re-logar"*/
import { getToken } from "./authAPI";

/*Listar todos os quartos independente de filtro*/
export async function listAllRoomsRequest() {
    /*Retorna o valor do token armazenado (que comprova a autenticação do usuário)*/
    const token = getToken();

    /*A função para listar os quartos precisa ser assíncrona, pois espera-se uma "promise" de que, ao chamar
    o endpoint api/rooms (que executa o arquivo rooms.php no qual contém todas as requisições possíveis),
    este arquivo converse com a Controller que, por sua vez, converse com a Model (onde está a query SELECT)*/
    const response = await fetch("api/rooms", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },


        credentials: "same-origin"
    })

}