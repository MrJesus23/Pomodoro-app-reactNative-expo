import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
    setTime: React.Dispatch<React.SetStateAction<number>>
    currentTimer: number;
    setCurrentTimer: React.Dispatch<React.SetStateAction<number>>;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setTime, setCurrentTimer, currentTimer, setIsModalVisible }: Props) => {

    const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo", "Personalizar"];

    function handlePress(index: number): void {

        if (index === 3) {
            setCurrentTimer(index);
            setIsModalVisible(true);
            return;
        }

        const newTime = index === 0 ? 1500 : index === 1 ? 300 : 900;

        setCurrentTimer(index);
        setTime(newTime * 1);

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerButtons}>

                {
                    opciones.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handlePress(index)}

                            style={[
                                styles.itemStyle,
                                currentTimer !== index && { borderColor: "#333" },
                            ]}
                        >
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        width: '90%',
    },

    containerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },

    itemStyle: {
        borderWidth: 2,
        paddingVertical: 12, 
        paddingHorizontal: 5,
        flex: 1,
        marginHorizontal: 6,
        borderRadius: 12,
        borderColor: "#333",
        alignItems: "center",
    }
});
