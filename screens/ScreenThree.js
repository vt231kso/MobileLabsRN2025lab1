import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const newsItems = [
  { id: '1', keyboardType: "email-address", label: "Електронна пошта" },
  { id: '2', secureTextEntry: true, label: "Пароль" },
  { id: '3', secureTextEntry: true, label: "Пароль (ще раз)" },
  { id: '4', keyboardType: "default", label: "Прізвище" },
  { id: '5', keyboardType: "default", label: "Ім'я" },
];

export default function ScreenThree() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Реєстрація</Text>

      {/* Контейнер для списку */}
      <View style={styles.listContainer}>
        <FlatList
          data={newsItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{item.label}</Text>
              <TextInput
                style={styles.input}
                keyboardType={item.keyboardType}
                secureTextEntry={item.secureTextEntry}
              />
            </View>
          )}
        />
      </View>

      {/* Кнопка під списком */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Реєстрація")}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  listContainer: {
    maxHeight: 500,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333333',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
