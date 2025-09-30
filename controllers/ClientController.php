<?php
require_once __DIR__ . "/../models/ClientModel.php";
require_once "PasswordController.php";

class ClientController{

    public static function create($conn, $data){
        $data['senha'] = PasswordController::generateHash($data['senha']);
        $result = ClientModel::create($conn, $data);
        if ($result){
            return jsonResponse(['message'=>"CLiente criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o cliente"], 400);
        }
    }

    public static function getAll($conn){
        $clientList = ClientModel::getAll($conn);
        return jsonResponse($clientList);
    }

    public static function getById($conn, $id){
        $client = ClientModel::getById($conn, $id);
        return jsonResponse($client);
    }

    public static function delete($conn, $id){
        $result = ClientModel::delete($conn, $id);
        if ($result){
            return jsonResponse(['message'=>"Cliente excluido com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao excluir o cliente"], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = ClientModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Cliente atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Erro ao atualizar'], 400);
        }
    }

     public static function loginClient($conn, $data) {
 
        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);
 
        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse([
                "status" => "erro",
                "message" => "Preencha todos os campos!"
            ], 401);
        }
 
        $client = ClientModel::clientValidation($conn, $data['email'], $data['password']);
        if ($client) {
            $token = createToken($client);
            return jsonResponse([ "token" => $token ]);
        } else {
            return jsonResponse([
                "status" => "erro",
                "message" => "Credenciais inválidas!"
            ], 401);
        }
    }



}

?>