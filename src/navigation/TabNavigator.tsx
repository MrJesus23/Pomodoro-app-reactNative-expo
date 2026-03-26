import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from '../screens/main/ProfileScreen'
import SettingsScreen from '../screens/main/SettingsScreen'
import AboutScreen from '../screens/main/AboutScreen'
import ClientScreen from '../screens/main/ClientScreen'
import PomodoroScreen from '../screens/main/PomodoroScreen'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
     <Tab.Navigator>

        <Tab.Screen
            name="Home"
            component={PomodoroScreen}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
        />

        <Tab.Screen
            name="Settings"
            component={SettingsScreen}
        />

        <Tab.Screen
            name="About"
            component={AboutScreen}
        />

        <Tab.Screen
            name="Clients"
            component={ClientScreen}
        />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})