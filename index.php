<?php
require_once "config/database.php";
require_once "helpers/response.php";
require_once "helpers/token_jwt.php";

if ($erroDB){
    echo "erro na conexao";
    exit;
}

$uri = Strtolower(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$method = $_SERVER['REQUEST_METHOD'];

$baseFolde = Strtolower(basename(dirname(__FILE__)));
$uri = str_replace("/$baseFolde", "", $uri);
$segments = explode("/", trim($uri, "/") );

$route = $segments[0] ?? null;
$subRoute = $segments[1] ?? null;

if ($route != "api") {
    // require "teste.php";
    require __DIR__ . "/public/index.html";
    exit;
 
} elseif ($route === "api") {
    if (in_array($subRoute, ["login", "rooms", "clients", "additionals", "orders"])) {
        require "routes/${subRoute}.php";
    } else {
        return jsonResponse(['mesage' => 'rota não encontrada', 404]);
    }
    exit;
} else {
    echo "404 pagina não encontrada";
    exit;
}

?>