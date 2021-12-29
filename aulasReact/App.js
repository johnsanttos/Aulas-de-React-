import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import css from './src/estilos/estilos'
import AsyncStorage from '@react-native-community/async-storage';

export default class aulasReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: '',
    }
    this.gravaNome = this.gravaNome.bind(this)
  }

// Quero que busque no banco o nome se deu certo a value valera nome
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({ nome: value });
    })
  }
  //ComponentDidMount - quando o componente é montado em tela igual useEfect
  //ComponentDidUpdate - toda vez que um componente é atualizado fazer algo

  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome; // desconstruido
    if (prevState !== nome) {
      await AsyncStorage.setItem('nome', nome)
    }
  }


  gravaNome() {
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso !!!')
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={css.container}>


        <View style={css.viewInput}>
          <TextInput
            style={css.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({ input: text })}
            underlineColorAndroid='{transparent'
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={css.botao}> + </Text>

          </TouchableOpacity>
        </View>

        <Text style={css.nome}>{this.state.nome} </Text>


      </View>
    );
  }
}