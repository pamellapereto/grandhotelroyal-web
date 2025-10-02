<?php
class ReserveModel{

    public static function create($conn, $data) {
        $sql = "INSERT INTO reservas (pedido_id, quarto_id, adicional_id , data_inicio, data_fim) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiiss",
            $data["pedido_id"],
            $data["quarto_id"],
            $data["adicional_id"],
            $data["inicio"],
            $data["fim"]
        );
        return $stmt->execute();
    }

    public static function getById($conn, $id){
        $sql = "SELECT * FROM reservas WHERE pedido_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
 
    
 
}
?>
 