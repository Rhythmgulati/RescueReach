import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { getLanguage, getLanguageData } from '../utils/storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({ navigation }: any) => {
  const { setLanguage, setLanguageData } = useContext(LanguageContext);

  useEffect(() => {
    const init = async () => {
      const lang = await getLanguage();
      const data = await getLanguageData();
      console.log('LANG', lang);
      console.log('LANGDATS', data);

      if (!lang || !data) {
        navigation.replace('LanguageSelection');
        return;
      }
      setLanguage(lang);
      setLanguageData(data);
      navigation.replace('Dashboard');
    };
    setTimeout(() => {
      init();
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4f46e5' }}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      {/* <Text>SplashScreen</Text> */}
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginTop: 200,
  },
});
