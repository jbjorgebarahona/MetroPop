import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import {Button} from 'react-native-elements';

const Submit = props =>{

    return(
        
        
      <TouchableOpacity style={[styles.container, {backgroundColor: props.color}] } onPress ={ props.onPressFunction}  >
          <Text style={styles.submitText}  > {props.title} </Text>
      </TouchableOpacity> 
      
      
    );

    
}

const styles= StyleSheet.create({
    container:{
        width: '80%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 20,
        borderWidth: 0,
        margin: '3%'
    },
    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10

    }
    
});

export default Submit;