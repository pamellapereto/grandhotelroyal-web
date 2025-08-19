import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    
    const nome = document.createElement('input');
    nome.placeholder = "Digite seu nome";
   
    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";

}
