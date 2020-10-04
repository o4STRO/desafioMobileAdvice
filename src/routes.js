import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './pages/login';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator  
                screenOptions={{
                headerShown: false
            }}> 
                <Stack.Screen 
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}