import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import languages from '../assets/languages.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageContext } from '../context/LanguageContext';
import { Toast } from 'toastify-react-native';
import { saveLanguage } from '../utils/storage';
import Header from '../components/Header';

const LanguageSelection = ({ navigation }: any) => {
  const { setLanguage } = React.useContext(LanguageContext);

  const selectLanguage = (langid: string) => {
    saveLanguage(langid);
    setLanguage(langid);
    navigation.replace('SetupScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Please select your preffered Language'} />
      <ScrollView>
        <View style={styles.cardContainer}>
          {languages.languages.map(lang => (
            <Pressable
              key={lang.id}
              onPress={() => selectLanguage(lang.id)}
              style={styles.pressable}
            >
              <Text>{lang.nativeName}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LanguageSelection;

const styles = StyleSheet.create({
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
    borderColor: '#0F2854',
    elevation: 10,
    borderWidth: 4,
    width: '40%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
