import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import languages from '../assets/languages.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageContext } from '../context/LanguageContext';
import { Toast } from 'toastify-react-native';
import { saveLanguage } from '../utils/storage';

const LanguageSelection = ({ navigation }: any) => {
  const { setLanguage } = React.useContext(LanguageContext);

  const selectLanguage = (langid: string) => {
    saveLanguage(langid);
    setLanguage(langid);
    navigation.replace('SetupScreen');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Please Select Your Preffered Language</Text>
        <View style={styles.cardContainer}>
          {languages.languages.map(lang => (
            <Pressable
              key={lang.id}
              onPress={() => selectLanguage(lang.id)}
              style={styles.pressable}
            >
              <Text>{lang.name}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable onPress={() => Toast.success('clicked')}>
          <Text>Hello</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LanguageSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  pressable: {
    padding: 20,
    margin: 10,
    height: 150,
    backgroundColor: '#ddd',
    width: '40%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
