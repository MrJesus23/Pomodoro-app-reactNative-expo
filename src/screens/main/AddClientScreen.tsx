import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { addClient } from '../../services/ClientService'

export default function addClientScreen({ navigation }: any) {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [ocupacion, setOcupacion] = useState("")

    const handleAdd = () => {
        if (!nombre || !email) return

        addClient({
            nombre,
            email,
            fecha,
            ocupacion,
        })

        Alert.alert("Éxito", "Cliente agregado correctamente");

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar Cliente</Text>

            <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Fecha" value={fecha} onChangeText={setFecha} style={styles.input} />
            <TextInput placeholder="Ocupación" value={ocupacion} onChangeText={setOcupacion} style={styles.input} />

            <Button title="Guardar" onPress={handleAdd} />

        </View>
    );
};

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