import React from 'react';
import {Text, View, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native';

export default class Persona extends React.Component{
  constructor(props){
    
    super(props)

    //Ahora definimos las varibales para la tabla persona de la Base de Datos de matriculagruposabado
    this.state = {
      TextInput_id:'',
      TextInput_ano_inicio:'',
      TextInput_ano_fin:'',
    }  
  }
//-----------------------------------------------------------------------------------
  //Ahora creamos las funciones de esta clase
  Insertar = () => {
    //Ahora vamos a consumir al API: APIMatriculasSabado
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Curso/InsertarCurso.php',{
      method:'POST',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          curso_id: this.state.TextInput_id,
          curso_ano_inicio: this.state.TextInput_ano_inicio,
          curso_ano_fin: this.state.TextInput_ano_fin,
        }
      )
    }).then((response) => response.json())

      .then((responseJson) =>{

      alert('El resgistro ha sido guardado: ' +responseJson);

    }).catch((error) => {

      console.error(error);

    });

  } 
//-----------------------------------------------------------------------------------
  Actualizar = () => {
    //Ahora vamos a codificar la funcion actualizar para consumir la Api
    fetch('http://172.16.6.12:8080/React-Native/APIMatriculasSabado/Model/Curso/ActualizarCurso.php',{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          curso_id: this.state.TextInput_id,
          curso_ano_inicio: this.state.TextInput_ano_inicio,
          curso_ano_fin: this.state.TextInput_ano_fin,
      })
    }).then((response) => response.json())

      .then((responseJson) =>{

        alert('El resgistro ha sido actualizado: ' + responseJson);

      }).catch((error) => {

        console.error(error);

      });
  }
//-----------------------------------------------------------------------------------
  Borrar = () => {
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Curso/EliminarCurso.php',{
      method:'DELETE',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          curso_id: this.state.TextInput_id
        }
      )
    }).then((response) => response.json())

      .then((responseJson) =>{

      alert('El resgistro ha sido borrado: ' +responseJson);

    }).catch((error) => {

      console.error(error);

    });
  }
//-----------------------------------------------------------------------------------
  ListarTodas = () => {
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Curso/ListarTodasLasCursos.php',{
      method:'GET',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          curso_id: this.state.TextInput_id,
          curso_ano_inicio: this.state.TextInput_ano_inicio,
          curso_ano_fin: this.state.TextInput_ano_fin,
        }
      )
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        TextInput_id: responseJson[0]['nif'],
        TextInput_ano_inicio: responseJson[0]['nombre'],
        TextInput_ano_fin: responseJson[0]['apellido1'],
        TextInput_apellido2: responseJson[0]['apellido2'],
        TextInput_ciudad: responseJson[0]['ciudad'],
        TextInput_direccion: responseJson[0]['direccion'],
        TextInput_telefono: responseJson[0]['telefono'],
        TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
        TextInput_sexo: responseJson[0]['sexo'],
        TextInput_tipo: responseJson[0]['tipo']
      })
    })
  }
//-----------------------------------------------------------------------------------
  Listar = () => {
      fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Persona/BuscarLaPersona.php',{
        method:'GET',
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
            persona_tipo: this.state.TextInput_tipo
          }
        )
      }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          TextInput_nif: responseJson[0]['nif'],
          TextInput_nombre: responseJson[0]['nombre'],
          TextInput_apellido1: responseJson[0]['apellido1'],
          TextInput_apellido2: responseJson[0]['apellido2'],
          TextInput_ciudad: responseJson[0]['ciudad'],
          TextInput_direccion: responseJson[0]['direccion'],
          TextInput_telefono: responseJson[0]['telefono'],
          TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
          TextInput_sexo: responseJson[0]['sexo'],
          TextInput_tipo: responseJson[0]['tipo']
        })
      })
  }
//-----------------------------------------------------------------------------------
  render(){
    return (
    <View style={MisEstilos.MainContainer}>

      <text style={{fontSize: 20, textAlign: 'center', marginBottom: 7,}}>
        Registro de personas</text>

    <TextInput
    placeholder="Ingrese el ID de la persona"
    onChangeText={TextInputValue => this.setState({
      TextInput_id: TextInputValue
    })}//Se captura el dato
    underlineColorAndroid='transparent'
    style={MisEstilos.TextInputStyleClass}
    value={this.state.TextInput_id}
    ></TextInput>

    <TextInput
    placeholder="Ingrese el NIF de la persona"
    onChangeText={TextInputValue => this.setState({
      TextInput_nif: TextInputValue
    })}//Se captura el dato
    underlineColorAndroid='transparent'
    style={MisEstilos.TextInputStyleClass}
    value={this.state.TextInput_nif}
    autoFocus={true}
    ></TextInput>


    <TouchableOpacity
    activeOpacity={0.4}
    style={MisEstilos.TouchableOpacityStyle}
    onPress={this.Insertar}
    ></TouchableOpacity>

    </View>
    );
  }
}
//-----------------------------------------------------------------------------------
const MisEstilos = StyleSheet.create({
  MainContainer:{
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  TextInputStyleClass:{
    textAlign: 'center',
    width: '90%',
    marginTop:7,
    height: 40,
    borderWidth: 1,
    borderColor: '#ff5722',
    borderRadius: 5,
  },
  TouchableOpacityStyle:{
    paddingTop:10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom:50,
    width:'90%',
    backgroundColor: '#08BCD4'
  },
  TextStyle:{
    color:'fff',
    textAlign: 'center',
  },
  rowViewContainer:{
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  }
});