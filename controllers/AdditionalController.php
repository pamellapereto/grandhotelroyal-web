<?php
require_once __DIR__ . "/../models/AdditionalModel.php";

class AdditionalController{

    public static function create($conn, $data){
        $result = AdditionalModel::create($conn, $data);
        if ($result){
            return jsonResponse(['message'=>"Adicional criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o adicional"], 400);
        }
    }

    public static function getAll($conn){
        $additionalList = AdditionalModel::getAll($conn);
        return jsonResponse($additionalList);
    }

    public static function getById($conn, $id){
        $additional = AdditionalModel::getById($conn, $id);
        return jsonResponse($additional);
    }

    public static function delete($conn, $id){
        $result = AdditionalModel::delete($conn, $id);
        if ($result){
            return jsonResponse(['message'=>"Adicional excluido com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao excluir o adicional"], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = AdditionalModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Adicional atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Erro ao atualizar'], 400);
        }
    }

}

?>