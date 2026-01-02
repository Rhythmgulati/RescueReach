import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = ({ navigation }: any) => {
  const option = [
    {
      title: 'Version',
      description: '0.0.1',
    },
    {
      title: 'Disclaimer',
      description: '0.0.1',
    },
    {
      title: 'Change Language',
      description: 'Switch Language',
      redirect: 'LanguageSelection',
    },
  ];

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text style={styles.heading}>Settings</Text>
      {option.map((item, index) =>
        item?.redirect ? (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.redirect)}
            style={styles.listitem}
          >
            <Text>
              {item.title}
              {':'}
            </Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        ) : (
          <View key={index} style={styles.listitem}>
            <Text>
              {item.title}
              {':'}
            </Text>
            <Text>{item.description}</Text>
          </View>
        ),
      )}
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  listitem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingBottom: 10,
    paddingRight: 15,
  },
});
