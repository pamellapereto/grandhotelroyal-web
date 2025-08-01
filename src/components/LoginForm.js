
export default function LoginForm() {
    const formulario = document.createElement
    ('form');
    
    const email = document.createElement
    ('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    return formulario;
}