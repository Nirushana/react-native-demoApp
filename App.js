import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Want become a dev?</Text>
      <Text style={styles.textStyle}>Fine, let's get started!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E64FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
  },
});
