<?php
require_once "ValidatorController.php";
require_once __DIR__ . "/../models/OrderModel.php";


class OrderController{
    public static function create($conn, $data){
        return;
    }

    public static function getById($conn, $id){
        return;
    }

    public static function getAll($conn){
        return;
    }

    public static function update($conn, $data){
        return;
    }

    public static function delete($conn, $id){
        return;
    }

    public static function createOrder($conn, $data){
        $data["usuario_id"] = isset($data['usuario_id']) ? $data['usuario_id']: null;

        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

        foreach($data['quartos'] as $quarto){
            ValidatorController::validate_data($quarto, ["id", "inicio", "fim"]);
        }
        
        if ( count($data["quartos"]) == 0){
            return jsonResponse(['message'=> 'Não existe reservas'], 400);
        }

        // os alunos devem corrigir as horas do inicio|fim de cada quarto
        // se eles nao faZ'rem, vai dar bug

        // OrderModel::createOrder($conn, $data);



    }
}

?>