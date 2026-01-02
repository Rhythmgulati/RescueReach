import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Contacts = ({ navigation }: any) => {
  const emergencyContacts = [
    {
      id: 1,
      name: 'Police Station',
      role: 'Police',
      phone: '100',
      alternatePhone: '112',
      locationName: 'Nearest Police Station',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=nearest+police+station',
      availability: '24x7',
      priority: 'high',
    },
    {
      id: 2,
      name: 'Government Hospital',
      role: 'Hospital',
      phone: '108',
      alternatePhone: '102',
      locationName: 'District Government Hospital',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=government+hospital+near+me',
      availability: '24x7',
      priority: 'high',
    },
    {
      id: 3,
      name: 'Fire & Rescue',
      role: 'Fire',
      phone: '101',
      alternatePhone: '112',
      locationName: 'Fire Station',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=fire+station+near+me',
      availability: '24x7',
      priority: 'high',
    },
    {
      id: 4,
      name: 'Village Health Worker',
      role: 'Health Worker',
      phone: '9876543210',
      alternatePhone: null,
      locationName: 'Primary Health Center',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=primary+health+center+near+me',
      availability: 'Daytime',
      priority: 'medium',
    },
    {
      id: 5,
      name: 'Local Ambulance Driver',
      role: 'Ambulance',
      phone: '9123456789',
      alternatePhone: null,
      locationName: 'Nearby Town',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=ambulance+service+near+me',
      availability: 'On Call',
      priority: 'medium',
    },
    {
      id: 6,
      name: 'Poison Control (India)',
      role: 'Poison Help',
      phone: '1800116117',
      alternatePhone: null,
      locationName: 'National Helpline',
      mapsLink:
        'https://www.google.com/maps/search/?api=1&query=poison+control+india',
      availability: '24x7',
      priority: 'high',
    },
  ];

  const callNumber = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const openMap = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>Contacts</Text>
      <ScrollView>
        <Pressable
          style={styles.addContactCard}
          onPress={() => navigation.navigate('Contacts')} // or open modal later
        >
          <Text style={styles.addIcon}>＋</Text>
          <Text style={styles.addText}>Add Custom Emergency Contact</Text>
        </Pressable>
        {emergencyContacts.map(contact => (
          <View key={contact.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.role}>{contact.role}</Text>
              <Text style={styles.location}>📍 {contact.locationName}</Text>
            </View>

            <View style={styles.actions}>
              <Pressable
                style={[styles.actionBtn, styles.callBtn]}
                onPress={() => callNumber(contact.phone)}
              >
                <Text style={styles.btnText}>CALL</Text>
              </Pressable>

              <Pressable
                style={[styles.actionBtn, styles.mapBtn]}
                onPress={() => openMap(contact.mapsLink)}
              >
                <Text style={styles.btnText}>MAP</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    fontSize: 13,
    color: '#666',
  },
  location: {
    fontSize: 12,
    color: '#444',
    marginTop: 4,
  },
  actions: {
    justifyContent: 'space-between',
    gap: 8,
  },
  actionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  callBtn: {
    backgroundColor: '#2e7d32', // green
  },
  mapBtn: {
    backgroundColor: '#1565c0', // blue
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  addContactCard: {
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  addIcon: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565c0',
    marginRight: 8,
  },
  addText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1565c0',
  },
});
