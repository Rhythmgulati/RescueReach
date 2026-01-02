import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmergencyScreen = () => {
  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text style={{ fontSize: 20 }}>Emergency</Text>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({});
