import { Component} from 'react'
import { render } from 'react-dom'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Alert, TextInput, TouchableOpacity, button, styleSheet} from 'react-native'


export default function App2()
{
    //render(){
        return (
            <SafeAreaView style={styles.container}>
            <Text>Page content</Text>
            </SafeAreaView>
            /* <View style={ESTILOS.conternedor}>
                <Text>Hoy</Text>
                    <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </View>*/
        )
    //}
}


const ESTILOS = StyleSheet.create({
    conternedor:{
        marginTop:50,
        flex:1,
        padding:24,
        backgroundColor: "red",
    },

    styleTextInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    SafeAreaView: {
        flex: 0,
        marginTop:50,
        backgroundColor: "red",
    },
})