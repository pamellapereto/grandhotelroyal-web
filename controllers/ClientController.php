<?php
require_once __DIR__ . "/../models/ClientModel.php";
require_once __DIR__ . "/../helpers/token_jwt.php";
require_once "AuthController.php";
require_once "PasswordController.php";
require_once "ValidatorController.php";


class ClientController{

    public static function create($conn, $data){
        ValidatorController::validate_data($data, ["nome", "cpf", "telefone", "email", "senha"]);

        $login = [
            "email" => $data['email'],
            "password" => $data['senha']
        ];

        $data['senha'] = PasswordController::generateHash($data['senha']);
        $result = ClientModel::create($conn, $data);
        if ($result){
            // se o usuario estiver -> efetuar o login
            // para retornar o Token JWT
            AuthController::loginClient($conn, $login);
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
        ValidatorController::validate_data($data, ["nome", "cpf", "telefone", "email"]);

        $result = ClientModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Cliente atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Erro ao atualizar'], 400);
        }
    }

}

?>