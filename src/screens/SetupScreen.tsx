import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import { fetchLanguagePack } from '../utils/api';
import { saveLanguageData } from '../utils/storage';
const SetupScreen = ({navigation}: any) => {

    const {language,setLanguageData,languageData} = useContext(LanguageContext);

   useEffect(() => {
    const downlaod = async () => {    
    if(!language) return;

    const data =await fetchLanguagePack(language);
    await saveLanguageData(data);
    setLanguageData(data);  

    console.log(data);
    

   
    navigation.replace('Dashboard');
 }
   
  setTimeout(() => {
        downlaod();
    }, 3000);
}, [language]);

  return (
    <View>
      <Text>SetupScreen</Text>
    </View>
  )
}

export default SetupScreen

const styles = StyleSheet.create({})