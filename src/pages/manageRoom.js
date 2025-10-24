import Navbar from "../components/Navbar.js";
import Form from "../components/Form.js";
import { addRoom } from '../api/roomsAPI.js';

export default function renderManageRoom() {
    //Menu (navigation)
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Gerenciar quarto';

    const contentForm = formulario.querySelector('form');
    contentForm.enctype = "multipart/form-data";

    //nome, numero, qtd_casal, qtd_solteiro, preco, disponivel, multiple files
    const inputNome = contentForm.querySelector('input[type=email]');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite o nome"
    inputNome.name = 'nome';

    const inputNumero = contentForm.querySelector('input[type=password]');
    inputNumero.type = 'text';
    inputNumero.placeholder = "Digite o número"
    inputNumero.name = 'numero';

    const inputQtd_Casal = document.createElement('select');
    inputQtd_Casal.className = 'select-qtd';
    inputQtd_Casal.style.borderWidth = '0.15rem';
    inputQtd_Casal.innerHTML =
    `
    <option class="" value="0">Quantidade cama de casal</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>`

    inputQtd_Casal.name = "qtd_casal";

    const inputQtd_Solteiro = document.createElement('input');
    inputQtd_Solteiro.type = 'number';
    inputQtd_Solteiro.placeholder = 'Quantidade cama solteiro'
    inputQtd_Solteiro.min = 0;
    inputQtd_Solteiro.max = 3;
    inputQtd_Solteiro.name = "qtd_solteiro";

    const inputPreco = document.createElement('input');
    inputPreco.type = 'number';
    inputPreco.placeholder = 'Digite o preço da diária';
    inputPreco.step = "0.01";
    inputPreco.name = "preco";

    const subTitDisp = document.createElement('p');
    subTitDisp.textContent = 'Quarto disponível:'

    const divDisp = document.createElement('div');
    divDisp.className = 'd-flex flex-row gap-2';
    divDisp.style.color = "#6a6a6aff";

    const labelTrue = document.createElement('label');
    labelTrue.textContent = 'Sim';
    const inputDispTrue = document.createElement('input');
    inputDispTrue.type = 'radio';
    inputDispTrue.name = 'disponivel';
    inputDispTrue.value = true;
    
    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';

    const inputDispFalse = document.createElement('input');
    inputDispFalse.type = 'radio';
    inputDispFalse.name = 'disponivel';
    inputDispFalse.value = false;

    divDisp.appendChild(subTitDisp);
    divDisp.appendChild(inputDispTrue);
    divDisp.appendChild(labelTrue);

    divDisp.appendChild(inputDispFalse);
    divDisp.appendChild(labelFalse);

    const inputFotos = document.createElement('input');
    inputFotos.className = 'form-control';
    inputFotos.type = 'file';
    inputFotos.id = 'formFileMultiple';
    inputFotos.multiple = true;
    inputFotos.accept = "image/*";
    inputFotos.name = 'fotos[]';

    /* PARA VOCÊ QUE ESTÁ FAZENDO COMO NO BOOSTRAP
    inputFotos.innerHTML =  `
    <input name="fotos[]" type="file" multiple id="formFileMultiple"
    class="form-control" accept="image/*" />
    `*/

    contentForm.insertBefore(inputQtd_Casal, contentForm.children[2]);
    contentForm.insertBefore(inputQtd_Solteiro, contentForm.children[3]);
    contentForm.insertBefore(inputPreco, contentForm.children[4]);
    contentForm.insertBefore(divDisp, contentForm.children[5]);
    contentForm.insertBefore(inputFotos, contentForm.children[6]);
 
    const btnRegisterRoom = contentForm.querySelector('button');
    btnRegisterRoom.textContent = 'Cadastrar';

    contentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try { 
            const response = await addRoom(contentForm);
            console.log("Resposta do servidor: " + response);
        }
        catch (error) {
            console.log("Erro ao enviar requisição: " + error.message);
        }
    })
}