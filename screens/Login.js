import React from 'react';
import { View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import { colorsDark } from 'react-native-elements/dist/config';

import Inputs from '../components/Input';
import Submit from '../components/Submit';
import Home from './Home';
import theme from '../theme';

const Login = props =>{
    return(
        <ScrollView style={{backgroundColor: theme.color.darkBlue}}>
      <View style={styles.container}>
      <Image 
        source={require('../assets/img/logo.png')} 
        resizeMode="center" 
        style={styles.image} />
          <Text style={styles.textTitle}>MetroPop</Text>
          <Text style={styles.textBody}>Inicia con una cuenta existente</Text>
          <View style={{marginTop: 20}}  />
          <Inputs name="Usuario" icon="user"/>
          <Inputs name="Contrasena" icon="lock" pass={true} />
          <View>
              <Text style={[styles.textBody],{alignSelf:'flex-end'},{color:'white'}} onPress = {() => props.navigation.navigate("CambioContrasena")} >Olvidaste la contrasena? </Text>
          </View>
          
          <Submit title='Login' color="#822A80"  onPressFunction = {() => props.navigation.navigate("Home")} />
          
            
          <View style={{flexDirection:'row', marginVertical: 5}}>
           
          <Text style={[styles.textBody,{color: 'white'}]} onPress = {() => props.navigation.navigate('SingUp')}>Registrate</Text>
          <Text style={[styles.textBody,{color: 'white'}]} onPress = {() => props.navigation.navigate('Settings')}>Settings</Text>
          </View>
      </View>

      </ScrollView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    image: {
        width:400,
        height:250,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
        color: 'white',
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16,
        color: 'white',
        margin: '1.5%'
    }
});

export default Login;