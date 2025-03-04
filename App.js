import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import { View, Image, Text, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* Верхній заголовок */}
      <View style={styles.header}>
        <Image source={require("./assets/1.png")} style={styles.image} />
        <Text style={styles.title}>FirstMobileApp</Text>
      </View>

      {/* Навігація */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              color: "black",
              marginBottom: 15,
            },
            tabBarStyle: { backgroundColor: "#f2f2f2", height: 70 },
            tabBarIndicatorStyle: { backgroundColor: "blue", height: 2 },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Головна") iconName = "home";
              else if (route.name === "Фотогалерея") iconName = "photo-library";
              else if (route.name === "Профіль") iconName = "person";

              return (
                <Icon name={iconName} size={24} color={focused ? "blue" : "gray"} />
              );
            },
          })}
        >
          <Tab.Screen name="Головна" component={ScreenOne} />
          <Tab.Screen name="Фотогалерея" component={ScreenTwo} />
          <Tab.Screen name="Профіль" component={ScreenThree} />
        </Tab.Navigator>
      </NavigationContainer>

      {/* Футер з прізвищем та групою */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Кашпуренко Софія, ВТ-23-1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
  },
  image: {
    resizeMode: "contain",
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  footer: {
    backgroundColor: "#d5d5d5",
    marginTop:10,
    position: "absolute",
    padding:5,
    bottom: 1,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    fontStyle: "italic",
    fontSize: 14,
    color: "gray",
  },
});

