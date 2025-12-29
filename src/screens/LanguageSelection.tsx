import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import languages from "../assets/languages.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LanguageContext } from '../context/LanguageContext';


const LanguageSelection = ({ navigation }: any) => {

    const {setLanguage}=React.useContext(LanguageContext);

    const selectLanguage=(langid:string)=>{
        AsyncStorage.setItem('language', langid);
        setLanguage(langid);
        navigation.replace('SetupScreen');
    }

    return (
    <View>
      <Text>LanguageSelection</Text>
      {languages.languages.map((lang) => (
        <Pressable key={lang.id} onPress={()=>selectLanguage(lang.id)}><Text>{lang.name}</Text></Pressable>
      ))}
    </View>
  )
}

export default LanguageSelection

const styles = StyleSheet.create({})