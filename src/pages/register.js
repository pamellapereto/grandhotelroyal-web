import { saveToken } from "../api/authAPI.js";
import { createRequest } from "../api/clientesAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
   
    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    //Seleciono o elemento form que está presente em ./components/Form.js
    const contentForm = formulario.querySelector('form');

    //Criar o input para nome e adicionar em contentForm
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite seu nome";

    const inputCPF = document.createElement('input');
    inputCPF.type = 'text';
    inputCPF.placeholder = "Digite seu CPF";

    const inputTelefone = document.createElement('input');
    inputTelefone.type = 'text';
    inputTelefone.placeholder = "Digite seu telefone";

    /*Para adicionar input nome ao contentForm, localizo onde está input email pois
    quero necessariamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    const inputSenha = formulario.querySelector('input[type="password"]');
    
    contentForm.insertBefore(inputNome, contentForm.children[0]);
    contentForm.insertBefore(inputCPF, contentForm.children[1]);
    contentForm.insertBefore(inputTelefone, contentForm.children[2]);

    //Criar o input para confirmar senha
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";
    contentForm.insertBefore(confSenha, contentForm.children[5]);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";

      //Monitora o clique no botão para acionar um evento de submeter os dados do form
        contentForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nome = inputNome.value.trim();
            const cpf = inputCPF.value.trim();
            const telefone = inputTelefone.value.trim();
            const email = inputEmail.value.trim();
            const senha = inputSenha.value.trim();
    
            try {
                const result = createRequest(nome, cpf, telefone, email, senha);
                //Amanhã será aqui que salvaremos o token assim que Jeff criá-lo
                // saveToken(result.token);
                //window.location.pathname = "/meusite/home";
            }
            catch {
                console.log("Erro inesperado!");
            }
        });
}
