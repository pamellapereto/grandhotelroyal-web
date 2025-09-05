<?php 

class PasswordController{
    public static function generateHash($value){
        return password_hash($value, PASSWORD_BCRYPT);
    }

    public static function validateHash($value, $hash){
        return password_verify($value, $hash);
    }

}


?>