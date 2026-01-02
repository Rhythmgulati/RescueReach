import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { fetchLanguagePack } from '../utils/api';
import { saveLanguageData } from '../utils/storage';
import getNetworkInfo from '../utils/netInfo';
import { Toast } from 'toastify-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SetupScreen = ({ navigation }: any) => {
  const { language, setLanguageData, languageData } =
    useContext(LanguageContext);
  let [isConnected, setIsConnected] = React.useState('loading');
  let [downloading, setDownloading] = React.useState(false);

  useEffect(() => {
    const downlaod = async () => {
      if (!language) return;

      const isOnline = await getNetworkInfo();
      console.log(isOnline);

      setIsConnected(isOnline ? 'true' : 'false');
      if (isConnected == 'false') {
        Toast.error(
          'No Internet Connection. Please Connect to the Internet to Download Language Pack',
        );
        return;
      }

      try {
        const data = await fetchLanguagePack(language);
        await saveLanguageData(data);
        setLanguageData(data);
        console.log(data);
        navigation.replace('Dashboard');
      } catch (error) {
        Toast.error('Failed to Download Resouces');
        setTimeout(() => {
          navigation.replace('LanguageSelection');
        }, 5000);
      }
    };

    setTimeout(() => {
      downlaod();
    }, 3000);
  }, [language]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>SetupScreen</Text>
      <View>
        {isConnected ? (
          <Text>Connected to Internet. Downloading Language Pack...</Text>
        ) : (
          <Text>No Internet Connection</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
