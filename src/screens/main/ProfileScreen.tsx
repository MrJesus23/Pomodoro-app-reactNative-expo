import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'

export default function ProfileScreen({ navigation }: any) {
    const { user } = useContext(AuthContext);

    return (
        <View>
            <Text>Perfil</Text>

            <Text>Usuario: {user?.email}</Text>
            <Text>Rol: {user?.role}</Text>
            
            <Button
                title="Volver"
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

const styles = StyleSheet.create({})