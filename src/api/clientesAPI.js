export async function createRequest(nome, cpf, telefone, email, senha) {
    const dados = {nome, cpf, telefone, email, senha };
    const response = await fetch("api/clients", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(dados),
        credentials: "same-origin"
    });
}