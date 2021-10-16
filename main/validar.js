import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert} from 'react-native';

export default class ValidarNumeros extends Component{

    constructor(props){
        super(props);
        this.state ={text:''};
    }

    ValidarNumeros = (text) => 
    {
        if (/^\d+$/.test(text))
        {
            this.setState({text:text});
        }else{
            this.setState({text:''});
        }
    }

    render() {     
            return (  

            <View style = {MisEstilos.container}>
                <Text>Operaciones</Text>                     
                    <TextInput 
                        keyboardType ='numeric' 
                        onChangeText= {this.ValidarNumeros}
                        value={this.state.text} 
                        placeholder="Solo números" 
                        underlineColorAndroid='transparent'
                        style={MisEstilos.ClaseEstilosTextInput}
                    />
                    
            </View> 
            );
        }
    }
const MisEstilos = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    TextoInput:{
    textAlign: 'center',
    width: '50%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
    },
    
    EstiloBoton:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '50%',
    backgroundColor: '#00BCD4' 
    },
    
    TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
    },

});