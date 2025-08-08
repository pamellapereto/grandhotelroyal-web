import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage() { 
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça o login ou crie uma conta';
    titulo.className = 'titulo';

    //Dentro de divRoot erá uma div chamada container e em container estará o formulario
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; //Classe do Bootstrap para criar um card
    container.style.width = '100%';
    container.style.maxWidth = '400px';

    divRoot.appendChild(container); //divRoot contém a nova div

    const formulario = LoginForm();
    
    container.appendChild(titulo);
    container.appendChild(formulario); //Nova div container, já dentro de divRoot, contém o form
}
