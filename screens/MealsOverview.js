import { View, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
// import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverview({ route }) {
  // const route = useRoute();
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList items={displayedMeals}/>
}

export default MealsOverview;



