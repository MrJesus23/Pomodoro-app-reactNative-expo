import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    visible: boolean;
    onClose: () => void;
    onSetTime: (seconds: number) => void;
}

export const CustomTimeModal = ({ visible, onClose, onSetTime }: Props) => {
    const [digits, setDigits] = useState("000000");

    const hours = digits.slice(0, 2);
    const minutes = digits.slice(2, 4);
    const seconds = digits.slice(4, 6);

    function handleStart() {
        const totalSecunds =
            Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
        onSetTime(totalSecunds);
        setDigits("000000");
        onClose();
    }

    function handleNumberPress(num: string) {
        setDigits((prev) => {
            const newDigits = prev.slice(1) + num;
            return newDigits;
        });
    }

    function handleDelete() {
        setDigits((prev) => {
            return "0" + prev.slice(0, 5);
        });
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.timeText}>
                        {hours}h {minutes}m {seconds}s
                    </Text>

                    <View style={styles.keypad}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <TouchableOpacity
                                key={num}
                                style={styles.key}
                                onPress={() => handleNumberPress(num.toString())}
                            >
                                <Text style={styles.keyText}>{num}</Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.key}
                            onPress={() => handleNumberPress("0")}
                        >
                            <Text style={styles.keyText}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.key} onPress={handleDelete}>
                            <Text style={styles.keyText}>⌫</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                            <Text style={styles.startText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
    },
    timeText: {
        fontSize: 28,
        marginBottom: 20,
    },
    keypad: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    key: {
        width: 60,
        height: 60,
        margin: 5,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    keyText: {
        fontSize: 20,
    },
    closeButton: {
        marginTop: 20,
    },
    startButton: {
        marginTop: 20,
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 8,
    },
    startText: {
        color: "white",
        fontSize: 18,
    },
});
