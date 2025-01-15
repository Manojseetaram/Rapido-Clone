import { View, Text,StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Main = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Main</Text>
</SafeAreaProvider>
  );
};


export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign:'center'
    }
})