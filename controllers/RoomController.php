<?php
require_once __DIR__ . "/../models/RoomModel.php";
require_once __DIR__ . "/../models/PhotoModel.php";
require_once "ValidatorController.php";
require_once "UploadController.php";


class RoomController{

    public static function create($conn, $data){
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);

        $result = RoomModel::create($conn, $data);
        if ($result){
            if ($data['fotos']){
                $pictures = UploadController::upload($data['fotos']);
                foreach($pictures['saves'] as $name){
                    $idPhoto = PhotoModel::create($conn, $name['name']);
                    if ($idPhoto){
                        PhotoModel::createRelationRoom($conn, $result, $idPhoto);
                    }
                }
            }
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
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Erro ao atualizar o quarto !'], 400);
        }
    }
    
    public static function get_available($conn, $data){
        ValidatorController::validate_data($data, ["inicio", "fim", "qtd"]);

        $data["inicio"] = ValidatorController::fix_dateHour($data["inicio"], 14);
        $data["fim"] = ValidatorController::fix_dateHour($data["fim"], 12);
        
        $result = RoomModel::get_available($conn, $data);
        if($result){
            foreach ($result as &$quarto) {
                $quarto['fotos'] = PhotoModel::getByRoomId($conn, $quarto['id']);
            }
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'não tem quartos disponiveis'], 400);
        }
    }

}

?>