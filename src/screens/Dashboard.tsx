import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import getNetworkInfo from '../utils/netInfo';
import { subscribeNetwork } from '../utils/subscribeNetwork';
import { SafeAreaView } from 'react-native-safe-area-context';

const buildCards = (isOnline: boolean | null) => [
  {
    redirect: 'CommonIssues',
    title: 'COMMON ISSUES',
  },
  {
    redirect: 'Contacts',
    title: 'EMERGENCY NUMBERS',
  },
  ...(isOnline
    ? [
        {
          redirect: 'WoundAnalyse',
          title: 'WOUND ANALYSIS',
        },
        {
          redirect: 'RecognizeMedicine',
          title: 'CHECK MEDICINE',
        },
      ]
    : []),
];

const Dashboard = ({ navigation }: any) => {
  const [Data, setData] = useState<any[]>([]);
  const [isConnected, setisConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeNetwork((isOnline: boolean | null) => {
      setData(buildCards(isOnline));
      setisConnected(isOnline ? true : false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { language, languageData } = useContext(LanguageContext);
  // console.log(languageData,"languageData in dashboard");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
          Rescue Reach:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isConnected ? 'green' : 'red' },
            ]}
          />
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: 'https://img.icons8.com/?size=100&id=59996&format=png&color=000000',
              }}
            ></Image>
          </Pressable>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {Data.map((item: any, index) => (
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

export default Dashboard;

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
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
