import React from 'react';
import {Text, View, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native';

export default class Persona extends React.Component{
  constructor(props){
    
    super(props)

    //Ahora definimos las varibales para la tabla persona de la Base de Datos de matriculagruposabado
    this.state = {
      TextInput_id_profesor :'',
      TextInput_id_departamento :'',
    }  
  }
//-----------------------------------------------------------------------------------
  //Ahora creamos las funciones de esta clase
  Insertar = () => {
    //Ahora vamos a consumir al API: APIMatriculasSabado
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Profesor/InsertarProfesor.php',{
      method:'POST',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          profesor_id_profesor: this.state.TextInput_id_profesor,
          profesor_id_departamento: this.state.TextInput_id_departamento,
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
    fetch('http://172.16.6.12:8080/React-Native/APIMatriculasSabado/Model/Profesor/ActualizarProfesor.php',{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          profesor_id_profesor: this.state.TextInput_id_profesor,
          profesor_id_departamento: this.state.TextInput_id_departamento,
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
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Profesor/EliminarProfesor.php',{
      method:'DELETE',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          profesor_id_profesor: this.state.TextInput_id_profesor,
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
    fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Profesor/ListarTodosLosProfesores.php',{
      method:'GET',
      headers:{
        'Accept': 'aaplication/json',
        'Content-type': 'aaplication/json'
      },
      body: JSON.stringify(
        {
          profesor_id_profesor: this.state.TextInput_id_profesor,
          profesor_id_departamento: this.state.TextInput_id_departamento,
        }
      )
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        TextInput_id_profesor: responseJson[0]['id_profesor'],
        TextInput_id_departamento: responseJson[0]['id_departamento'],
      })
    })
  }
//-----------------------------------------------------------------------------------
  Listar = () => {
      fetch('http://172.16.6.12:8088/React-Native/APIMatriculasSabado/Model/Profesor/BuscarProfesor.php',{
        method:'GET',
        headers:{
          'Accept': 'aaplication/json',
          'Content-type': 'aaplication/json'
        },
        body: JSON.stringify(
          {
            profesor_id_profesor: this.state.TextInput_id_profesor,
            profesor_id_departamento: this.state.TextInput_id_departamento,
          }
        )
      }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          TextInput_id_profesor: responseJson[0]['id_profesor'],
          TextInput_id_departamento: responseJson[0]['id_departamento'],
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
      placeholder="Ingrese el tipo de la persona"
      onChangeText={TextInputValue => this.setState({
        TextInput_tipo: TextInputValue
      })}//Se captura el dato
      underlineColorAndroid='transparent'
      style={MisEstilos.TextInputStyleClass}
      value={this.state.TextInput_tipo}
      autoFocus={true}
    ></TextInput>

    
    <TextInput
      placeholder="Ingrese la clave de la persona"
      onChangeText={TextInputValue => this.setState({
        TextInput_Clave: TextInputValue
      })}//Se captura el dato
      underlineColorAndroid='transparent'
      style={MisEstilos.TextInputStyleClass}
      value={this.state.TextInput_Clave}
      autoFocus={true}
    ></TextInput>

      <TouchableOpacity activeOpacity={0.4} style={MisEstilos.TouchableOpacityStyle} onPress={this.Insertar}>
        <Text style={MisEstilos.TextStyle}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={MisEstilos.TouchableOpacityStyle} onPress={this.Actualizar}>
        <Text style={MisEstilos.TextStyle}>Actualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={MisEstilos.TouchableOpacityStyle} onPress={this.Borrar}>
        <Text style={MisEstilos.TextStyle}>Borrar</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={MisEstilos.TouchableOpacityStyle} onPress={this.Listar}>
        <Text style={MisEstilos.TextStyle}>Buscar</Text>
      </TouchableOpacity>

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