import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { updateClient } from '../../services/ClientService'

export default function EditClientScreen({ route, navigation }: any) {
    const { client } = route.params

    const [nombre, setNombre] = useState(client.nombre)
    const [email, setEmail] = useState(client.email)
    const [fecha, setFecha] = useState(client.fecha)
    const [ocupacion, setOcupacion] = useState(client.ocupacion)

    const hanleUpdate = () => {
        updateClient({
            id: client.id,
            nombre,
            email,
            fecha,
            ocupacion
        })

        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Cliente</Text>

            <TextInput value={nombre} onChangeText={setNombre} style={styles.input} />
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput value={fecha} onChangeText={setFecha} style={styles.input} />
            <TextInput value={ocupacion} onChangeText={setOcupacion} style={styles.input} />

            <Button title="Actualizar" onPress={hanleUpdate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
    },
});