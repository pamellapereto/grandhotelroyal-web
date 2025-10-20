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

    //KEVEN - RETORNA TRUE SE NAO TEM CONFLITO
    public static function isQuartoDisponivel($conn, $quarto_id, $inicio, $fim) {
        $sql = "SELECT COUNT(*) as conflitos
                FROM reservas
                WHERE quarto_id = ?
                AND (
                    (data_inicio <= ? AND data_fim > ?) OR
                    (data_inicio < ? AND data_fim >= ?) OR
                    (data_inicio >= ? AND data_fim <= ?)
                )";
       
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("issssss",
            $quarto_id,
            $fim, $inicio,
            $inicio, $fim,
            $inicio, $fim
        );
       
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        return $row['conflitos'] == 0;
    }
    
    // MATHEUS  - RETORNA TRUE SE LINHAS AFETADAS MAIOR QUE ZERO
    public static function isConflito($conn, $quarto_id, $inicio, $fim) {
        $sql = "SELECT * FROM reservas WHERE quarto_id = ? AND data_inicio < ? AND data_fim > ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss", $quarto_id, $fim, $inicio);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }

    // JOÃO - RETORNA TRUE SE LINHAS AFETADAS MAIOR QUE ZERO
    public static function getAvaibleOrder($conn, $fkQuarto, $inicio, $fim) {
            $sql ="SELECT id
            FROM reservas
            WHERE quarto_id = ? AND
                ( data_inicio < ? AND data_fim > ?) LIMIT 1";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iss",
                $fkQuarto,
                $fim,
                $inicio);  
            $stmt->execute();
            $result = $stmt->get_result();
            $isReserved = $result->num_rows > 0;
            $stmt->close();
            return $isReserved;
        }

}
?>
 