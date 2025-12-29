import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';


const Dashboard = () => {

    const {language,languageData} = useContext(LanguageContext);
    console.log(languageData,"languageData in dashboard");
    
    return (
    <View>
      <Text>Dashboard: {language}</Text>
      {languageData?.firstAidTopics?.map((topic:any, index:number) => (
        <View key={index}>
          <Text>{topic.title}</Text>
        </View>
      ))}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})