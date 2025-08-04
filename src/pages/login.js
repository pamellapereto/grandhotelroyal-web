import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage() { 
    const divRoot = document.getElementById('root');

    divRoot.innerHTML = '';

    const formulario = LoginForm();

    divRoot.appendChild(formulario);
}
