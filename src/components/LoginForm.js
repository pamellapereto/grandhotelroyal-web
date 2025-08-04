export default function LoginForm() {
    const formulario = document.createElement('form');
    
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = "Digite sua senha";
    formulario.appendChild(password);

    const btnAuth = document.createElement('button');
    btnAuth.type = 'submit';
    btnAuth.textContent = "Entrar";
    formulario.appendChild(btnAuth); 
    
    return formulario;
}