import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import { getLanguage, getLanguageData } from '../utils/storage';

const SplashScreen = ({ navigation }: any) => {

    const{setLanguage, setLanguageData} = useContext(LanguageContext);

    useEffect(() => {
        const init = async () => {
        const lang=await getLanguage();
        const data=await getLanguageData();
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
        }, 1000);
    }, [])

    return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})