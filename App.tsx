import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
