import React from 'react';
import {Text, View, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native';

export default class Persona extends React.Component{
  constructor(props){
    
    super(props)

    //Ahora definimos las varibales para la tabla persona de la Base de Datos de matriculagruposabado
    this.state = {
      TextInput_id:'',
      TextInput_nif:'',
      TextInput_nombre:'',
      TextInput_apellido1:'',
      TextInput_apellido2:'',
      TextInput_ciudad:'',
      TextInput_direccion:'',
      TextInput_telefono:'',
      TextInput_fecha_nacimiento:'',
      TextInput_sexo:'',
      TextInput_tipo:'',
      TextInput_Clave:''
    }  
  }

  //Ahora creamos las funciones de esta clase
  InsertarPersona = () => {
    //Ahora vamos a consumir al API: APIMatriculasSabado
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/InsertarPersona.php',{
      method:'POST',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo,
          persona_Clave: this.state.TextInput_Clave
        }
      )
    })
  } 

  ActualizarPersona = () => {

  }

  BorrarPersona = () => {
    
  }

  BuscarPersona = () => {
    
  }

  ListarPersona = () => {
    
  }

  render(){
    return (
    <View>
    
    </View>
    );
  }
}
const MisEstilos = StyleSheet.create({

});