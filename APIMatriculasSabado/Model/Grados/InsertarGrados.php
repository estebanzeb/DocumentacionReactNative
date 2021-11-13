<?php
//Vamos a crear las instruciones de codigó para grabar

//Vamos a invocar las cabeceras para dar permisos de ejecucíon a los llamados de la API desde cualquier Aplicación
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

//Ahora vamos a crear el metodo consultar para listar todos los registros

// Importar la conexion (PARAMETROS)
include '../../Connection/ParametrosDB.php';

// Conectar a la base de datos
$connection = mysqli_connect($HostName,$DBUser,$DBpass,$DBname);//El orden correcto

if ($connection->connect_error){

    die("La conexion no se pudo realizar: " .$connection->connect_error);

    }else{
            
        $json = file_get_contents('php://input');
        $obj = json_decode($json,true);

        $id= $obj['id'];
        $nombre = $obj['nombre'];


        // Instrucción SQL para agregar el estudiante.
        $SQL="INSERT INTO persona (nombre) VALUES ('$nombre')";
            
        //Ahora vamos a ejecutar la instruccion SQL anterior
        if(mysqli_query($connection,$SQL)){

            $Mensaje = "GRABADO";
            //$Mensaje = "La persona fue registrada correctamente";
            $json = json_encode($Mensaje);
            echo $json;
        }else{
            echo ("Error");
        }
    }
    mysqli_close($connection);
?>