import { StyleSheet, Text, View, Alert, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { register } from '../../services/Auth'

export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = () => {
        const result = register(email, password)

        if (!result.success) {
            Alert.alert("Error", result.message)
            return;
        }

        Alert.alert("Éxito", "Cuenta creada correctamente")
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
    },
});