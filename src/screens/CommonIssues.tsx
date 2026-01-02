import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommonIssues = ({ navigation }: any) => {
  const { languageData } = useContext(LanguageContext);
  console.log(languageData);

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text style={{ fontSize: 20 }}>CommonIssues</Text>
      <View style={styles.cardContainer}>
        {languageData?.firstAidTopics?.map((item: any, index: any) => (
          <Pressable
            key={index}
            style={styles.pressable}
            onPress={() => navigation.navigate(item.redirect)}
          >
            <Text>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CommonIssues;

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
    width: '40%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
