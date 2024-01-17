import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Button, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../ab2/imagens/FitL2.png';
import PaginaPrincipal from './PaginaPrincipal';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaPrincipal">
        <Stack.Screen name='PaginaPrincipal' component={PaginaPrincipal}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


//jfjfjfj//fkfkfkk
//lglglgl
//ççgçgçgçg
