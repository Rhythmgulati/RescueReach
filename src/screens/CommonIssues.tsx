import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Header from '../components/Header';

const CommonIssues = ({ navigation }: any) => {
  const { languageData } = useContext(LanguageContext);
  console.log(languageData);

  return (
    <View>
      <Header title={'CommonIssues'} />
      <View style={styles.cardContainer}>
        {languageData?.firstAidTopics?.map((item: any, index: any) => (
          <Pressable
            key={index}
            style={styles.pressable}
            onPress={() => navigation.navigate(item.redirect)}
          >
            <Text style={{ fontSize: 17, color: '#e5e7eb' }}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
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
    backgroundColor: '#0CC477',
    width: '40%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: '#4F46E5',
    borderWidth: 2,
  },
});
