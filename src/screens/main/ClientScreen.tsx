import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState, useCallback, useContext } from 'react'

import { getClients, deleteClient } from '../../services/ClientService'
import { AuthContext } from '../../context/AuthContext'

export default function ClientScreen({ navigation }: any) {
    const [clients, setClients] = useState<any[]>([])
    const { user } = useContext(AuthContext)

    useFocusEffect(
        useCallback(() => {
            const data = getClients()
            setClients(data)
        }, [])
    )

    const handDelete = (id: number) => {
        Alert.alert(
            "Confirmar",
            "¿Seguro que quieres eliminar a este cliente?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar", style: "destructive", onPress: () => {
                        deleteClient(id);
                        const data = getClients();
                        setClients(data);
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Clientes</Text>

            {user?.role === "admin" && (
                <Button
                    title="Agregar Cliente"
                    onPress={() => navigation.navigate('AddClient')}
                />
            )}

            <FlatList
                data={clients}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text>ID: {item.id}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Fecha: {item.fecha}</Text>
                        <Text>Ocupación: {item.ocupacion}</Text>

                        {user?.role === "admin" && (
                            <Button title='Eliminar' onPress={() => handDelete(item.id)} />
                        )}

                        {user?.role === "admin" && (
                            <Button
                                title='Editar'
                                onPress={() => navigation.navigate("EditClient", { client: item })}
                            />
                        )}


                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 15,
        textAlign: "center",
    },
    card: {
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
});