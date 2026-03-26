import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState, useContext } from 'react'
import { login } from '../../services/Auth'
import { AuthContext } from '../../context/AuthContext'

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(AuthContext);

    const handleLogin = () => {
        const result = login(email, password)

        if (!result.success) {
            Alert.alert("Error", result.message)
            return
        }

        setUser({
            email,
            role: result.role
        });

        navigation.navigate("Home")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <Button title="Iniciar sesión" onPress={handleLogin} />

            <Text
                style={styles.link}
                onPress={() => navigation.navigate("Register")}
            >
                ¿No tienes una cuenta? Regístrate
            </Text>

        </View>
    );
}

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
    link: {
        marginTop: 15,
        color: "blue",
        textAlign: "center",
    },
});