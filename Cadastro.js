
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/MaterialIcons';


export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [genero, setGenero] = useState('');
  const [plano, setPlano] = useState('');

  const [ligar, setLigar] = useState(true);


  const cadastrar = () => {
    setLigar(!ligar)
  }


    return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <TextInput
        multiline
        style={styles.input}
        placeholder='Nome:' 
        onChangeText={setNome}
        /><Text>{'\n'}</Text>
        <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Idade'
        onChangeText={setIdade}
        /> <Text>{'\n'}</Text>
        <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='CPF:'
        onChangeText={setCpf}
        /><Text>{'\n'}</Text>
        <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Telefone:'
        onChangeText={setTelefone}
        /><Text>{'\n'}</Text>
        <TextInput
        multiline
        style={styles.input}
        placeholder='Genero:'
        onChangeText={setGenero}
        /><Text>{'\n'}</Text>
        <TextInput
        multiline
        style={styles.input}
        placeholder='Plano'
        onChangeText={setPlano}
        /><Text>{'\n'} {'\n'}</Text>

        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
            <Text style={styles.textobotao} >Cadastrar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.baixo}>

      {ligar ? (<Text></Text>) : (
       <Text style={styles.text}>
       O aluno(a): {nome}, de {idade} anos,{"\n"}
       com o CPF n°{cpf}, telefone nº {telefone},{"\n"}
       do sexo: {genero}, foi cadastrado no plano {plano} {"\n\n"}
       <Text style={styles.texto2}>Aluno Cadastrado com Sucesso!</Text>
     </Text>
)}

        <View style={styles.footer} >
          <Icon2 name='user-o' size={30} /> <Text>Eu sou o Bruno aluno de Sistemas de Informação pela UFAL</Text>  
        </View>
            

      </View>
      

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
  },
  input :{
    height: 40,
    width: 200,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  formulario: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#056659',

  },
  baixo: {
    flex: 1,
    paddingTop: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'light gray',
  }
  ,botao: {
    backgroundColor:'white',
    padding: 10,
    borderRadius: 50,
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center', 
     
  },
  textobotao:{
    fontSize: 20,
    color: '#056659',
  }, 
  text: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto2: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: 30,
    color:'grey',   
    justifyContent: 'center',
    alignItems: 'center', 
  },
  
});

