<?php
require_once __DIR__ . "/../models/RoomModel.php";

class RoomController{

    public static function create($conn, $data){

        if( ! isset($data['disponivel']) ){
            return jsonResponse(['message'=>"Erro, Falta o campo: disponivel"], 400);
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
        $buscarId = RoomModel::getById($conn, $id);
        return jsonResponse($buscarId);
    }

    public static function delete($conn, $id){
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

}

?>