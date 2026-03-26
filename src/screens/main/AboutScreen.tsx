import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function AboutScreen({ navigation }: any) {
    return (
        <View>
            <Text>About</Text>

            <Text>App desarrollada por Jesús Daniel Bustamante Gómez</Text>

            <Button
                title="Volver a Home"
                onPress={() => navigation.navigate("Home")}
            />


        </View>
    )
}

const styles = StyleSheet.create({})