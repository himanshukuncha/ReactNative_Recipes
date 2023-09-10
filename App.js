import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider } from "react-redux";

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import Favorite from "./screens/Favorite";
// import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f55951" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#d7d7d7" },
      }}
    >
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#f55951" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#d7d7d7" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={({ route }) => {
              const title = route.params.title;
              return {
                title: title,
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetail}
            options={({ route }) => {
              const title = route.params.title;
              return {
                title: title,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    //  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
