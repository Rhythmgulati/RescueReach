import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLanguage = () =>
  AsyncStorage.getItem('LANGUAGE');

export const saveLanguage = (lang) =>
  AsyncStorage.setItem('LANGUAGE', lang);

export const getLanguageData = async () => {
  const data = await AsyncStorage.getItem('LANGUAGE_DATA');
  return data ? JSON.parse(data) : null;
};

export const saveLanguageData = (data) =>
  AsyncStorage.setItem('LANGUAGE_DATA', JSON.stringify(data));
