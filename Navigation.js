import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from './screens/Singup';
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';
import StackHeader from './components/StackHeader';
import CambioContrasena from './screens/Cambiocontrasena';
import Perfil from './screens/Perfil';

const Stack = createStackNavigator();

const Navigation = props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="CambioContrasena" component={CambioContrasena} />
                <Stack.Screen name="Perfil" component={Perfil} />
                       

                <Stack.Screen name="SingUp" component={SingUp} options={{headerShown: false}}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;