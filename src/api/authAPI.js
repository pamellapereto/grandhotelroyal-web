export async function loginRequest(email, senha) {
    const response = await fetch("api/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados),
        // body: new URLSearchParams({ "email":email, "password":senha }).toString(),

        /* URL da requisição é a mesma da origem do front (mesmo protocolo http/
        mesmo domínio - local/mesma porta 80 do servidor web Apache) 
        Front: http://localhost/meusite/public/index.html
        Back: http://localhost/meusite/api/login.php
        */
        credentials: "same-origin"
    });
    console.log('response:', response);


    // Interpreta a resposta como JSON
    let data = null;
    try {
        data = await response.json();
    }
    catch {
        // Se não for JSON válido, data permanece null
        data = null;
    }

    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    };
}





/*
<form>

    <input name="email" value="daniloa@gmail.com">
    <input name="senha" value="minha senha 123">

</form>

email=daniloa%40gmail.com&senha=minha+senha+123
*/