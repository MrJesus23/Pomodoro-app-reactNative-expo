import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingsScreen({ navigation }: any) {
    return (
        <View>
            <Text>Configuración</Text>

            <Button
                title="Ver Clientes"
                onPress={() => navigation.navigate("Clients")}
            />

            <Button
                title="Volver"
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Salir al Login"
                onPress={() => navigation.navigate("Login")}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({})