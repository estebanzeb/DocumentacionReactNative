import React from 'react';
import { Alert,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class operate extends React.Component {

    constructor(props) {
        //Defino identificadores como constantes
        //Numeropi=3.14;
        super(props);//Para iniciar las constantes

        //Ahora definimos variables
        this.state = {
            Valor1:'',
            Valor2:'',
            Valor3:'',
            result1:'',
            result2:'',
            result3:'',
            result:''
        };
        

        //Crear las funcnones
        
    }

    operate = (e,t) => {

        let n1 = parseInt(this.state.Valor1);
        let n2 = parseInt(this.state.Valor2);
        let n3 = parseInt(this.state.Valor3);
        // let result =0;
        // let result1 =0;
        // let result2 =0;
        // let result3 =0;
        switch (t) {
            case 'A':
                result1 = n1 && n2 && n3 ? (n1 + n2 + n3)/3 : null;
                this.setState({result1});
            break;

            case 'S':
                result2 = n1 && n2 && n3 ? (n1 + n2 + n3)/3 : null;
                this.setState({result2});
            break;

            case 'M':
                result3 = n1 && n2 && n3 ? (n1 + n2 + n3)/3 : null;
                this.setState({result3});
            break;

            case 'D':
                rresult = result1 && result2 && result3 ? result1 + result2 + result3 : null;
                this.setState({result});
            break;

            default:
            result = 0;
            break;
        }
    }

/*
    sumar = () => 
    {
        let Valor1 = parseInt(this.state.Valor1);
        let Valor2 = parseInt(this.state.Valor2);
        //console.log(Valor1);
        //console.log(Valor2);
        const result = Valor1 && Valor2 ? Valor1 + Valor2 : null;
        console.log(result);
        this.setState({result});
        
    }
    restar = () => 
    {
        let Valor1 = parseInt(this.state.Valor1);
        let Valor2 = parseInt(this.state.Valor2);
        //console.log(Valor1);
        //console.log(Valor2);
        const result = Valor1 && Valor2 ? Valor1 - Valor2 : null;
        console.log(result);
        this.setState({result});
        
    }
    multiplicar = () => 
    {
        let Valor1 = parseInt(this.state.Valor1);
        let Valor2 = parseInt(this.state.Valor2);
        //console.log(Valor1);
        //console.log(Valor2);
        const result = Valor1 && Valor2 ? Valor1 * Valor2 : null;
        console.log(result);
        this.setState({result});
        
    }
    dividir = () => 
    {
        let Valor1 = parseInt(this.state.Valor1);
        let Valor2 = parseInt(this.state.Valor2);
        //console.log(Valor1);
        //console.log(Valor2);
        const result = Valor1 && Valor2 ? Valor1 / Valor2 : null;
        console.log(result);
        this.setState({result});
        
    }
*/
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.Text}> Calcular Operaciones </Text>

                <Text style={styles.Text}> {this.state.Valor1} </Text>
                <TextInput
                    placeholder="Nota 1"
                    onChangeText={(TextInputValue) => this.setState({Valor1:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor1}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 2"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor2}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 3"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor3}
                />

                <TouchableOpacity 
                activeOpacity={.5} 
                style={styles.TouchableOpacityStyle} 
                onPress={e => this.operate(e,'A')}>
                    <Text style={styles.TextStyle}> Calcular </Text>
                </TouchableOpacity>

                <Text style={styles.Text}>Resultado: {this.state.result1}</Text>

//----------------------------------------------------------------------------------------------------------------------

                <Text style={styles.Text}> {this.state.Valor1} </Text>
                <TextInput
                    placeholder="Nota 1"
                    onChangeText={(TextInputValue) => this.setState({Valor1:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor1}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 2"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor2}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 3"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor2}
                />

                <TouchableOpacity 
                activeOpacity={.5} 
                style={styles.TouchableOpacityStyle} 
                onPress={e => this.operate(e,'A')}>
                    <Text style={styles.TextStyle}> Calcular </Text>
                </TouchableOpacity>

                <Text style={styles.Text}>Resultado: {this.state.result2}</Text>

//----------------------------------------------------------------------------------------------------------------------


                <Text style={styles.Text}> {this.state.Valor1} </Text>
                <TextInput
                    placeholder="Nota 1"
                    onChangeText={(TextInputValue) => this.setState({Valor1:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor1}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 2"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor2}
                />
                
                <Text style={styles.Text}> {this.state.Valor2} </Text>
                <TextInput
                    placeholder="Nota 3"
                    onChangeText={(TextInputValue) => this.setState({Valor2:TextInputValue})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.Valor2}
                />

                <TouchableOpacity 
                activeOpacity={.5} 
                style={styles.TouchableOpacityStyle} 
                onPress={e => this.operate(e,'A')}>
                    <Text style={styles.TextStyle}> Calcular </Text>
                </TouchableOpacity>

                <Text style={styles.Text}>Resultado: {this.state.result3}</Text>

                <Text style={styles.Text}>Resultado: {this.state.result3}</Text>
            </View>
            );
        }
    }

const styles = StyleSheet.create({

    Text: {
        fontSize: 20, 
        textAlign: 'center', 
        marginBottom: 7
    },

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
    
}

});