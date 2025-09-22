import renderCartPage from "./pages/cart.js";
import renderHomePage from "./pages/home.js";
import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/register.js";

//Configuraçao de rotas mapeadas
const routes = {
   "/login": renderLoginPage,
   "/cadastro": renderRegisterPage,
   "/home": renderHomePage,
   "/carrinho": renderCartPage
};


//Obtém o caminho atual a parte do nome
function getPath() {
   //exemplo: obtém "/login"
   const url = (location.pathname || "").replace("/meusite/", "/").trim();
   console.log(url);
   //retorna url se começar com "/", se não, retorna "/home" como padrão
   return url && url.startsWith("/") ? url : "/home";      
} 

//Decide o que renderizar com base na rota atual
function renderRoutes() {
   const url = getPath();  //Lê a rota atual, ex. "/login"
   const render = routes[url] || routes["/home"]; //Busca esta rota no mapa
   render(); //Executa a função de render na página atual
}


//Renderizacao
document.addEventListener('DOMContentLoaded', renderRoutes);
