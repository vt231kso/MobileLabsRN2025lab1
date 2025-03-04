import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const newsData = [
  { id: '1', source: require('../assets/2.png') },
  { id: '2', source: require('../assets/2.png') },
  { id: '3', source: require('../assets/2.png') },
  { id: '4', source: require('../assets/2.png') },
  { id: '5', source: require('../assets/2.png') },
  { id: '6', source: require('../assets/2.png') },
  { id: '7', source: require('../assets/2.png') },
  { id: '8', source: require('../assets/2.png') },
  { id: '9', source: require('../assets/2.png') },
  { id: '10', source: require('../assets/2.png') },
];

export default function ScreenTwo() {
  return (
    <FlatList
      data={newsData}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',

  },
  image: {
    height: 150,
resizeMode: 'contain',
  },
});
