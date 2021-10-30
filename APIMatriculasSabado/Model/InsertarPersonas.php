<?php
//Vamos a crear las instruciones de codigó para grabar

//Vamos a invocar las cabeceras para dar permisos de ejecucíon a los llamados de la API desde cualquier Aplicación
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');//CRUD
header('Access-Control-Max-Age: 1000');//
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

//Ahora vamos a crear el metodo consultar para listar todos los registros

// Importar la conexion (PARAMETROS)
include '../Connection/ParametrosDB.php';

// Conectar a la base de datos
$connection = new mysqli($HostName,$DBUser,$DBpass,$DBname);//El orden correcto
if ($connection->connect_error){

    die("La conexion no se pudo realizar: " .$connection->connect_error);

    }else{
            
        $json = file_get_contents('php://input');
        $obj = json_decode($json,true);

        $id= $obj['id'];
        $nif = $obj['nif'];
        $nombre = $obj['nombre'];
        $apellido1 = $obj['apellido1'];
        $apellido2 = $obj['apellido2'];
        $ciudad = $obj['ciudad'];
        $direccion = $obj['direccion'];
        $telefono = $obj['telefono'];
        $fecha_nacimiento = $obj['fecha_nacimiento'];
        $sexo = $obj['sexo'];
        $tipo = $obj['tipo'];
        $Clave = $obj['Clave'];

        // Instrucción SQL para agregar el estudiante.
        $SQL="INSERT INTO persona (nif, nombre, apellido1, apellido2, ciudad, direccion, telefono, fecha_nacimiento, sexo, tipo, Clave) VALUES ('$nif', '$nombre', '$apellido1', '$apellido2', '$ciudad', '$direccion', '$telefono', '$fecha_nacimiento', '$sexo', '$tipo', '$Clave')";

        //Ahora vamos a ejecutar la instruccion SQL anterior
        if(mysqli_query($SQL_QUERY)){

            $Mensaje = "EcHo";
            //$Mensaje = "La persona fue registrada correctamente";
            $json = json_encode($SQL,JSON_UNESCAPED_UNICODE);
        }
    }

?>