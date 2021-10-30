<?php
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

//Ahora validamos si la conexion es correcta o no

if ($connection->connect_error){
    die("La conexion no se pudo realizar: " .$connection->connect_error);
}else{
    //Ahora vamos a construir la consulta
    $SQL='SELECT * FROM departamento';
    $resultado = $connection->query($SQL);

    //Validar si se devuelven datos
        if ($resultado->num_rows > 0){
            //Con los datos encontrados los llevamos a un array
            while ($row[] = $resultado->fetch_assoc()){
                //Levamos el dato a una variable
                $item = $row;
                //Lo convertimos en JSON
                $json = json_encode($item,true); 
                echo($json);
            }
        }else{
            echo("No se encontraron datos de profesor para mostrar");
        }
    }

?>


