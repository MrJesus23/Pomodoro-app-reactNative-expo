import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import TabNavigator from './TabNavigator';
import addClientScreen from '../screens/main/AddClientScreen';
import EditClientScreen from '../screens/main/EditClientScreen';



const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AddClient"
                    component={addClientScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="EditClient"
                    component={EditClientScreen}
                    options={{ headerShown: false }}
                />
                                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
