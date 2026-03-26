import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from '../../context/AuthContext';

import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";
import { CustomTimeModal } from "../../components/CustomTimeModal";

export default function PomodoroScreen() {
  const { user } = useContext(AuthContext);

  const [time, setTime] = useState(1500);
  const [currentTimer, setCurrentTimer] = useState<number>(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [customTime, setCustomTime] = useState(0);

  const [isWorking, setIsWorking] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    var interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false);
            setIsWorking((prev) => !prev);

            switch (currentTimer) {
              case 0:
                return 1500;
              case 1:
                return 300;
              case 2:
                return 900;
              case 3:
                return customTime;
              default:
                return prevTime;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, currentTimer]);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a POMODORO, {user?.email}!</Text>

      <Header
        setTime={setTime}
        setCurrentTimer={setCurrentTimer}
        currentTimer={currentTimer}
        setIsModalVisible={setIsModalVisible}
      />

      <Text style={styles.tiempo}>
        <Timer time={time} />
      </Text>

      <CustomTimeModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSetTime={(seconds) => {
          setCustomTime(seconds);
          setTime(seconds);
          setCurrentTimer(3);
          setIsActive(true);
        }}
      />

      <TouchableOpacity
        onPress={() => setIsActive(!isActive)}
        style={styles.boton}
      >
        <Text>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tiempo: {
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 56,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#f7dc6f",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
