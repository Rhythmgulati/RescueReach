import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, children }: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 140,
    backgroundColor: '#4f46e5',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    paddingTop: 40,
    marginBottom: 20,
  },
  title: {
    color: '#e5e7eb',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
