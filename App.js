import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {n, navigate} from './n.js'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Persona from './MatriculasRN/Persona.js'
import Profesor from './MatriculasRN/Profesor.js'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.Drawer = createDrawerNavigator()
    
  }

  render() {
    return (
      <NavigationContainer ref={n}>
        <this.Drawer.Navigator initialRouteName="Persona" >
        <this.Drawer.Screen name="Persona"  component={Persona} />
          <this.Drawer.Screen name="Profesor"  component={Profesor} />
        </this.Drawer.Navigator>
      </NavigationContainer>    
      )
  }
}