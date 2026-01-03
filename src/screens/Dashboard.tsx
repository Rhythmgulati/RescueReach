import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { subscribeNetwork } from '../utils/subscribeNetwork';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toast } from 'toastify-react-native';
import Header from '../components/Header';

const buildCards = (isOnline: boolean | null) => [
  {
    redirect: 'CommonIssues',
    labelKey: 'commonIssues',
  },
  {
    redirect: 'Contacts',
    labelKey: 'emergencyNumbers',
  },
  ...(isOnline
    ? [
        {
          redirect: 'WoundAnalyse',
          labelKey: 'woundAnalysis',
        },
        {
          redirect: 'RecognizeMedicine',
          labelKey: 'checkMedicine',
        },
      ]
    : []),
];

const Dashboard = ({ navigation }: any) => {
  const [Data, setData] = useState<any[]>([]);
  const [isConnected, setisConnected] = useState(true);

  const prevNetworkRef = useRef<boolean | null>(null);
  useEffect(() => {
    const unsubscribe = subscribeNetwork((isOnline: boolean | null) => {
      setData(buildCards(isOnline));
      setisConnected(isOnline ? true : false);
      if (
        prevNetworkRef.current != null &&
        prevNetworkRef.current !== isOnline
      ) {
        if (!isOnline) {
          Toast.error('You are offline. Online features disabled.');
        } else {
          Toast.success('Back online. Online features enabled.');
        }
      }

      prevNetworkRef.current = isOnline;
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { language, languageData } = useContext(LanguageContext);
  // console.log(languageData,"languageData in dashboard");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 30,
          }}
        >
          <Text style={{ color: '#e5e7eb', fontSize: 18, fontWeight: 'bold' }}>
            Rescue Reach:{' '}
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {languageData?.labels?.dashboard ?? 'Dashboard'}
            </Text>
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

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=59996&format=png&color=000000',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Header>
      <TouchableOpacity
        style={styles.EmergencyButton}
        onPress={() => navigation.navigate('EmergencyScreen')}
      >
        <Text style={styles.text}>EMERGENCY !!</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        {Data.map((item: any, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pressable}
            onPress={() => navigation.navigate(item.redirect)}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                color: '#e5e7eb',
              }}
            >
              {languageData?.labels?.[item.labelKey] ?? item.labelKey}
            </Text>
          </TouchableOpacity>
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
    backgroundColor: '#0CC477',
    width: '40%',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  EmergencyButton: {
    padding: 20,
    marginHorizontal: 20,
    height: 150,
    backgroundColor: '#F93E34',
    width: 'auto',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 20,
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  text: {
    color: '#e5e7eb',
    fontSize: 20,
  },
});
