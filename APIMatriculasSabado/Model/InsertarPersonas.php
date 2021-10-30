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

// Obteniendo los datos en la variable $json.
$json = file_get_contents('php://input');

// Decodificando los datos en formato JSON en la variables $obj.
$obj = json_decode($json,JSON_UNESCAPED_UNICODE);

$SQL='INSERT INTO persona(id, nif, nombre, apellido1, apellido2, ciudad, direccion, telefono, fecha_nacimiento, sexo, tipo, Clave) VALUES ()';
    $resultado = $connection->query($SQL);

?>