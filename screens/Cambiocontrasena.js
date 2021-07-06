import React from 'react';
import { View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import Input from '../components/Input';
import Submit from '../components/Submit';
import theme from '../theme';

const CambioContrasena = props =>{
    return(
        <ScrollView style={{backgroundColor: theme.color.darkBlue}}>
            <View style={styles.container}> 
                <Image source={require('../assets/img/logo.png')} 
                resizeMode="center"
                style={styles.image}/>
               
                 
                 <Input name="Nueva Contrasena" icon="lock" pass={true}/>
                 <Input name="Confirmar Contrasena" icon="lock" pass={true}/>
                 <Submit title='Aceptar' color="#822A80" onPressFunction = {() => props.navigation.navigate("Home")} />
                 

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

export default  CambioContrasena ;