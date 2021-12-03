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

        //var_dump ($json);
        $id= $obj['id'];
        $nombre = $obj['nombre'];
        $creditos = $obj['creditos'];
        $tipo = $obj['tipo'];
        $curso = $obj['curso'];
        $cuatrimestre = $obj['cuatrimestre'];
        $id_profesor  = $obj['id_profesor '];
        $id_grado  = $obj['id_grado '];

        // Instrucción SQL para agregar el estudiante.
        $SQL="UPDATE asignatura SET  nombre='$nombre', creditos='$creditos', tipo='$tipo', curso='$curso', curso='$curso', cuatrimestre='$cuatrimestre', id_profesor='$id_profesor', id_grado='$id_grado' WHERE id= $id";
        
        //echo ("$SQL");     
        //Ahora vamos a ejecutar la instruccion SQL anterior
        if(mysqli_query($connection,$SQL)){

            $Mensaje = "Actualizado";
            //$Mensaje = "La persona fue registrada correctamente";
            $json = json_encode($Mensaje);
            echo $json;
        }else{
            echo ("Error");
        }
    }
    mysqli_close($connection);
?>

<?php
//Vamos a crear las instrucciones de código para grabar datos en
//la tabla persona.

//Vamos a inovicar las cabeceras para dar permisos
//de ejecución a los llamados de la API desde cualquier

//Aplicación.
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE,
OPTIONS');
header('Access-Control-Max-Age: 1000');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-
Token , Authorization');

//Ahora vamos a crear el método actualizar para modificar todos los
campos.
include '../Conexion/ParametrosDB.php';

//Vamos a abrir la conexión.
$conn = mysqli_connect($HostName, $HostUser, $HostPass,
$DatabaseName);

//Ahora validemos si la conexión es correcta o no.
$json = file_get_contents('php://input');

////Decodificando los datos formato JSON en la variable $obj
$obj = json_decode($json, true);

//Vamos a crear las variables para enviar los datos de los campos de la
//tabla de la siguiente manera:

$nombre = $obj['nombre'];
$creditos = $obj['creditos'];
$tipo = $obj['tipo'];
$curso = $obj['curso'];
$cuatrimestre = $obj['cuatrimestre'];
$id_profesor  = $obj['id_profesor '];
$id_grado  = $obj['id_grado '];

//Ahora agreguemos la instrucción SQL para actualizar
$SQL="UPDATE asignatura SET  nombre='$nombre', creditos='$creditos', tipo='$tipo', curso='$curso', curso='$curso', cuatrimestre='$cuatrimestre', id_profesor='$id_profesor', id_grado='$id_grado' WHERE id= $id";

//Ahora vamos a ejecutar la instrucción SQL anterior

if(mysqli_query($conn, $Sql_Query))
{
$Mensaje = "ACTUALIZADO";
$json = json_encode($Mensaje);
echo $json;
}
else
{
echo "ERROR";
}
//Cerremos la conexión
mysqli_close($conn);
?>