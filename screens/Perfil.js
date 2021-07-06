import React from 'react';
import { View,StyleSheet,Text,Image,ScrollView } from 'react-native';
import Submit from '../components/Submit';
import theme from '../theme';
const Perfil = props =>{
    return(
        <ScrollView style={{backgroundColor: theme.color.darkBlue}}>
            <View style={styles.container}> 
                <Image source={require('../assets/img/perfil.png')} 
                resizeMode="center"
                style={styles.image}/>
               <Text style={styles.textTitle}>Jorge Barahona</Text>
                
                <Submit title='Usuario: jbjorge' color="#040624"  />
                <Submit title='Correo: jbjorgebarahona@gmail.com' color="#040624"  />
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

export default  Perfil;