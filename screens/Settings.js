import React from 'react';
import { View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import { width } from 'styled-system';
import Input from '../components/Input';
import Submit from '../components/Submit';
import theme from '../theme';

const Settings = props =>{
    return(
        <ScrollView style={{backgroundColor: theme.color.darkBlue}}>
            <View style={styles.container}> 
                <Image source={require('../assets/img/logo.png')} 
                resizeMode="center"
                style={styles.image}/>
               
                 <Submit title='Cambiar Contrasena' color="#040624" onPressFunction = {() => props.navigation.navigate("CambioContrasena")} />
                 <Submit title='Perfil' color="#040624" onPressFunction = {() => props.navigation.navigate("Perfil")} />
                 <Submit title='Cerrar Sesion' color="#040624" onPressFunction = {() => props.navigation.navigate("Login")} />   
                 <View style={{flexDirection: 'row'}}>
                    
                 </View>

            </View>
            
           
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        width: '100%'
    },
    image: {
        width:200,
        height: 130,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 25,
        fontFamily: 'Foundation',
        marginVertical: 5,
        color: "white"
        
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation',
        color: 'white'
    }

    
});

export default Settings;