import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

// Масив новин (можна отримати з API)
const newsData = [
  { id: '1', title: 'Новина 1', date: '01.03.2025', description: 'Короткий текст новини 1' },
  { id: '2', title: 'Новина 2', date: '02.03.2025', description: 'Короткий текст новини 2' },
  { id: '3', title: 'Новина 3', date: '03.03.2025', description: 'Короткий текст новини 3' },
  { id: '4', title: 'Новина 4', date: '04.03.2025', description: 'Короткий текст новини 4' },
  { id: '5', title: 'Новина 5', date: '05.03.2025', description: 'Короткий текст новини 5' },
  { id: '6', title: 'Новина 6', date: '06.03.2025', description: 'Короткий текст новини 6' },
  { id: '7', title: 'Новина 7', date: '07.03.2025', description: 'Короткий текст новини 7' },
  { id: '8', title: 'Новина 8', date: '08.03.2025', description: 'Короткий текст новини 8' },
  { id: '9', title: 'Новина 9', date: '09.03.2025', description: 'Короткий текст новини 9' },
  { id: '10', title: 'Новина 10', date: '10.03.2025', description: 'Короткий текст новини 10' },
];


const NewsItem = ({ title, date, description }) => (
  <View style={styles.newsContainer}>
    <Image source={require('../assets/2.png')} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

export default function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Новини</Text>


      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  text: {
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
  description: {
    fontSize: 12,
    color: 'black',
  },
});
