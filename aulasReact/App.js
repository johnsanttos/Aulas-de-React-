import React, { Component } from 'react';
import Entrar from './src/components/Entrar'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Button, Modal } from 'react-native';
import css from './src/estilos/estilos'
import AsyncStorage from '@react-native-community/async-storage';

export default class aulasReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({ modalVisible: true })
  }

  sair(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={css.container}>

        <Button title="Entrar" onPress={this.entrar} />

        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Entrar fechar={() => this.sair(false)} />
          </View>

        </Modal>

      </View>
    );
  }
}