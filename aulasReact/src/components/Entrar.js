import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class aulasReact extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 15, }}>
                <Text style={{ paddingTop: 15, color: '#fff', fontSize: 28, textAlign: 'center' }}>Seja Bem-vindo!</Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </View>
        );
    }
}