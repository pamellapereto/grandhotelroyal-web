<?php
require_once __DIR__ . "/../models/RoomModel.php";
require_once "ValidatorController.php";


class RoomController{
    public static $labels = ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"];

    public static function create($conn, $data){

        $validar = ValidatorController::validate_data($data, self::$labels);

        if( !empty($validar) ){
            $dados = implode(", ", $validar);
            return jsonResponse(['message'=>"Erro, Falta o campo: ".$dados], 400);
        }


        $result = RoomModel::create($conn, $data);
        if ($result){
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 400);
        }
    }

    
    public static function getAll($conn){
        $roomList = RoomModel::getAll($conn);
        return jsonResponse($roomList);
    }

    public static function getById($conn, $id){
        if( empty($id) ){
            return jsonResponse(['message'=>"Erro, Falta o campo: id"], 400);
        }
        $buscarId = RoomModel::getById($conn, $id);
        return jsonResponse($buscarId);
    }

    public static function delete($conn, $id){
        if( empty($id) ){
            return jsonResponse(['message'=>"Erro, Falta o campo: id"], 400);
        }

        $result = RoomModel::delete($conn, $id);
        if ($result){
            return jsonResponse(['message'=>"Quarto excluido com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao excluir o quarto"], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }
    
    public static function get_available($conn, $data){
        $result = RoomModel::get_available($conn, $data);
        if($result){
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'asdasdasd'], 400);
        }
    }

}

?>