<?php 
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/RoomController.php";
    require_once __DIR__ ."/controllers/PasswordController.php";
    require_once __DIR__ ."/helpers/token_jwt.php";


    RoomController::getAll($conn);
    
    


    // $data = [
    //     "nome" => "Quarto Supremo",
    //     "numero" => 250,
    //     "qtd_casal" => 1,
    //     "qtd_solteiro" => 1,
    //     "preco" => 350,
    //     "disponivel" => 1
    // ];

    // $data = [
    //     "email"=>"fulano@email.com",
    //     "password"=>"123"
    // ];
    // AuthController::login($conn, $data);

    // $tokenInvalido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZXVzaXRlIiwiaWF0IjoxNzU2OTIyNTQ1LCJleHAiOjE3NTY5MjYxNDUsInN1YiI6eyJpZCI6Miwibm9tZSI6ImZ1bGFubyIsImVtYWlsIjoiZnVsYW5vQGVtYWlsLmNvbSIsImNhcmdvIjoiZnVuY2lvbmFyaW8ifX0.-eySYeU6wQV8IKrbzKmTi_Rw9N3m_5LkC_mQwqQkc4M";
    // echo validateToken($tokenInvalido);
    // $tokenValido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZXVzaXRlIiwiaWF0IjoxNzU2OTMwMjAwLCJleHAiOjE3NTY5MzM4MDAsInN1YiI6eyJpZCI6Miwibm9tZSI6ImZ1bGFubyIsImVtYWlsIjoiZnVsYW5vQGVtYWlsLmNvbSIsImNhcmdvIjoiZnVuY2lvbmFyaW8ifX0.nXykpS-rX4K-80OLf8NEVBHHOr9gcL4vUDb5P1LRZ2o";
    // echo var_dump( validateToken($tokenValido) );
    
    
    // echo PasswordController::generateHash($data['password']);
    // $hash = '$2y$10$DmOoJfxGTqRg/bMwSEemPe0Llwce5uyOTzaE8sr.ru4Jq1CU.A7li';
    // echo "<br>";
    // echo PasswordController::validateHash($data['password'], $hash);

?>
