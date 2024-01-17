import React from 'react';
import { StyleSheet, Text,TouchableOpacity, Button, Image, View } from 'react-native';
import Logo from '../ab2/imagens/FitL2.png';



const PaginaPrincipal = ({ navigation }) => {
    const irParaOutraPagina = () => {
      navigation.navigate('Cadastro');
    };

    
    return (
      <View style={styles.container}>
        <View style={styles.cima}>        
          <View style={styles.caixaimg} >
          <Image source={Logo} style={styles.imagem} />
          </View>
        </View>
        <View style={styles.baixo}>
          <View style={styles.caixabotao}>
            
  
            <TouchableOpacity style={styles.botao} 
            onPress={irParaOutraPagina}>
            <Text style={styles.textobotao}>Iniciar Cadastro</Text>
            </TouchableOpacity>
          </View>
          
  
        </View>
        
      </View>
    );
  }


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    cima: {
      flex: 1,
      backgroundColor: '#056659',
      justifyContent: 'center',
      alignItems: 'center',
    },
    baixo: {
      flex: 1,
      backgroundColor: 'light gray',
      justifyContent: 'center',
      alignItems: 'center',
    },  
    caixaimg: {
      flex: 1,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagem: {
      flex: 1,
      width: '100%',
      resizeMode: 'contain',
      marginBottom: 10,
    },
    botao: {
      backgroundColor:'#056659',
      padding: 10,
      borderRadius: 50,
      width: 250,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    textobotao:{
      fontSize: 30,
      color:'white',
    },  
  });
  export default PaginaPrincipal;
  