import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView,Text } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { alignItems } from "styled-system";
import { fetchMetroPOP, searchMovie} from "../api";
import CarteleraList from "../components/movieList";
import Submit from "../components/Submit";
import theme from "../theme";

const Home = () => {
    const [pelis, setPelis] = useState({});

    const getPelisList = async() => {
        const response = await fetchMetroPOP();
        setPelis(response);
    };

    useEffect(() => {
        getPelisList();
    }, []);

    return ( 
    
          <>
           
        <ScrollView style={{backgroundColor: theme.color.darkBlue}}>
          
        <View >
        
            <>{pelis.Search ? <CarteleraList pelis = {pelis}/> : null}</>
            
        </View>
        <Submit title='Login' color="#822A80" style={{alignItems: "center"}} onPressFunction = {() => props.navigation.navigate("Settings")} /> 
        </ScrollView>
     </>
       
        )
        }

        

        export default Home;