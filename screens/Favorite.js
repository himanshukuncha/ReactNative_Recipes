import { Text, View, StyleSheet } from "react-native";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
import { MEALS } from "../data/dummy-data";

const Favorite = () => {
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));


  // if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet...</Text>
      </View>
    );
  // }

  // return <MealsList items={favoriteMeals} />;
};

export default Favorite;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
