
//DanielSanchez052

//Importamos react
import React, { useState } from "react";

//Importamos de react native "Text"
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";

//Importamos las imagenes
/*import imageIM from './assets/imagen.png'*/
import imageIM from './assets/Ruby-Diamond.gif'

//Importamos image piker (Elejir la imagen) un selector de imagenes
import * as ImagePicker from "expo-image-picker";

//Importamos para compartir
import * as Sharing from "expo-sharing";

import uploadToAnonymousFilesAsync from 'anonymous-files';

//Componente App
const App = () => {

    const [selectedImage, setSelectedImage] = useState(null)

    //Abrir la biblioteca para abrir el selector de imagenes
    let openImagePickerAsync = async () => {
      //metodo para pedir permisos para la lectura de imagenes
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync(); //Esta pidiendo permisos

     //Si no acepto el permiso se envia una alerta
    if (permissionResult.granted === false) {
      alert("Permission to camara roll is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    //console.log(pickerResult);

      if (pickerResult.cancelled === true) {
        return;
      }
      
    if (Platform.OS === "web") {
      const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri)
      console.log(remoteUri);
      //setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }

    };

    const openShareDialog = async () => {
      //Valida si el dispositivo puede compartir imagenes
      if (!(await Sharing.isAvailableAsync())) {
        // alert("Sharing, is not available on your platform");
        alert(
          `The image share is available for sharing at: ${selectedImage.remoteUri}`
        );
        return;
      }

      await Sharing.shareAsync(selectedImage.localUri);
    };



    return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Pick an Image!!
      </Text>
      
      <TouchableOpacity   
      //Se coloca el onpress dentro de la etiqueta de imagen para que al presionar la imagen, se realice al accion
      onPress={openImagePickerAsync}>
    <Image style={styles.image2}
    
    source={{uri: selectedImage !== null ? selectedImage.localUri :'https://picsum.photos/600/600'}}>
    </Image>
      </TouchableOpacity>

      {
        selectedImage ? ( <TouchableOpacity
          style={styles.button}
          onpress={openShareDialog}
          >
          <Text style={styles.buttonText}>Share this image</Text>
          </TouchableOpacity>
          ) : (
            <View/>
          )}

    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},

  title: {
    fontSize:30,
    color: "#ffff00",
    },

  image: {height:300, width: 380},

  image2: { height: 500, width: 500, borderRadius: 500, resizeMode:'contain' },

  button: {
    backgroundColor:'blue',
    padding:7,
    marginTop:8,
  },

  buttonText: {
    color:'white',
    fontSize: 18,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth
},

});

const Separator = () => (
  <View style={styles.separator} />

);

export default App;


/*
    <Button
      color="red"
      title="Press"
      onPress={() => Alert.alert('Hello!!!')}Error
    />
    */


  /*<View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>


  <Text style={{fontSize:30}}>
    Hello, world
  </Text>

  </View>

  <Image
      source = {imageIM}
      style = {styles.image2}
      />

    onPress={() => Alert.alert('Simple Button pressed')}//Error

  <Image style={styles.image} source={imageIM}>  </Image>

  

 */