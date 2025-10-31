<?php
require_once __DIR__ . "/../controllers/RoomController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
    $id = $segments[2] ?? null;

    if (isset($id)){
        if (is_numeric($id)){ // cliente passou um numero -> (API/ROOMS/1)
            RoomController::getById($conn, $id);

        }elseif($id === "disponiveis"){ // cliente os disponiveis -> (API/ROOMS/DISPONIVEIS?)
            $data = [ "inicio" => isset($_GET['inicio']) ? $_GET['inicio'] : null,
                "fim" => isset($_GET['fim']) ? $_GET['fim'] : null,
                "qtd" => isset($_GET['qtd']) ? $_GET['qtd'] : null];
            RoomController::get_available($conn, $data);
        }else{ // cliente colocou qualquer outra coisa
            jsonResponse(['message'=>"Essa rota não existe"], 400);

        }
    }else{ // cliente não passou nada -> (API/ROOMS)
        RoomController::getAll($conn);
    }
}

elseif ( $_SERVER['REQUEST_METHOD'] === "POST" ){
    validateTokenAPI("funcionario");
    $data = $_POST;
    $data['fotos'] = $_FILES['fotos'] ?? null;
    RoomController::create($conn, $data);
}

elseif ( $_SERVER['REQUEST_METHOD'] === "PUT" ){
    validateTokenAPI("funcionario");
    $data = json_decode( file_get_contents('php://input'), true );
    $id = $data['id'];
    RoomController::update($conn, $id, $data);
}

elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    validateTokenAPI("funcionario");
    $id = $segments[2] ?? null;
    if (isset($id)){
        RoomController::delete($conn, $id);
    }else{
        jsonResponse(['message'=>"ID do quarto é obrigatório"], 400);
    }
}

else{
    jsonResponse([ 'status'=>'erro', 'message'=>'Método não permitido'], 405);
}

?>