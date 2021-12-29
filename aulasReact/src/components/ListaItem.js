import React from 'react';
import {  TouchableOpacity, View, Text} from 'react-native';
import { StyleSheet } from 'react-native'

export default function components(props) {
 return (
    <TouchableOpacity 
    onPress ={()=>{}}
    style= {{padding: 10,
    flexdirection: 'row',
    }}>
    <>
    <Text style= {{fontSize: 15,}}> {props.data.task} </Text>

    <View style ={{

    }}
    ></View>
    </>
    
    </TouchableOpacity>


  );
}