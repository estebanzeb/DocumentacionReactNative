import React from 'react';
import { Alert,StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';



export default class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      TextInput_Student_ID: '',
      TextInput_Student_Name: '',
      TextInput_Student_Class: '',
      TextInput_Student_Phone_Num: '',
      TextInput_Student_Email: '',
      dataSource:[]
    }

  }


  refreshStudents=  () =>{
    fetch('http://192.168.1.59:8080/APIMatriculasSabado/Model/Persona/ListarTodasLasPersonas.php')
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        dataSource:responseJson
      })
    })
  }

  componentDidMount=  () =>{
    /*fetch('http://localhost:8080/apireactnativeacademic/ShowAllStudentsList.php')
    .then((response) => response.json())
    .then((responseJson)=>{
      this.setState({
        dataSource:responseJson
      })
    })*/
    this.refreshStudents();
  }
 

  SearchStudentRecord =  () => {
    fetch('http://192.168.1.59:8080/APIMatriculasSabado/Model/Persona/BuscarPersona.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        id: this.state.TextInput_Student_ID
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          TextInput_Student_Name: responseJson[0]['nif'],
          TextInput_Student_Class: responseJson[0]['nombre'],
          TextInput_Student_Phone_Num: responseJson[0]['apellido1'],
          TextInput_Student_Email: responseJson[0]['apellido2']
        })
      }).catch((error) => {
        alert('No se encuentra el Id');
        this.setState({
          TextInput_Student_ID: '',
          TextInput_Student_Name: '',
          TextInput_Student_Class: '',
          TextInput_Student_Phone_Num: '',
          TextInput_Student_Email: '',
          dataSource:[]
        })
      });
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}> Registro de Estudiante </Text>
        <TextInput
          placeholder="Ingrese el Id del estudiante"
          onChangeText={TextInputValue => this.setState({ TextInput_Student_ID: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          value={this.state.TextInput_Student_ID}
        />
        <TextInput
          placeholder="Ingrese el nombre del estudiante"
          onChangeText={TextInputValue => this.setState({ TextInput_Student_Name: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          value={this.state.TextInput_Student_Name}
          autoFocus={true}
         
          
        />
        <TextInput
          placeholder="Ingrese la clase del estudiante"
          onChangeText={TextInputValue => this.setState({ TextInput_Student_Class: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          value={this.state.TextInput_Student_Class}
        />
        <TextInput
          placeholder="Ingrese número de teléfono"
          onChangeText={TextInputValue => this.setState({ TextInput_Student_Phone_Num: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          value={this.state.TextInput_Student_Phone_Num}
          
        />
        <TextInput
          placeholder="Ingrese el correo electrónico"
          onChangeText={TextInputValue => this.setState({ TextInput_Student_Email: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          value={this.state.TextInput_Student_Email}
         
          
        />
        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.SearchStudentRecord} >
          <Text style={styles.TextStyle}> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle}>
          <Text style={styles.TextStyle}> Listar </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => alert(item.nif +" "+item.nombre)}
          style={styles.TouchableOpacityStyle}>
            <Text>{item.nif } - {item.nombre}</Text>
          </TouchableOpacity>
        }
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  TextInputStyleClass: {

    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },

  TouchableOpacityStyle: {

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});
