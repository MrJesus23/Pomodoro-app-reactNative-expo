import { StyleSheet, Text, View } from 'react-native';

interface Props {
    time: number;
}

export const Timer = ({ time }: Props) => {

    const FormatoTiempo = `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;

    return (
        <View style={styles.container}>
            <Text style={styles.time}>
                {FormatoTiempo}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25, 
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 5,
    },

    time: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#333',
        lineHeight: 58,
        textAlign: 'center',
    }
});