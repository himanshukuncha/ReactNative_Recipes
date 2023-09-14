import {
  Button,
  Image,
  Text,
  TextBase,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import Icon from "../components/Icon";
import { useSelector, useDispatch } from "react-redux";
import MealDetailsComponent from "../components/MealDetailsComponent";
// import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetail({ route, navigation }) {
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  // const dispatch = useDispatch();

  const title = route.params.title;
  const imageUrl = route.params.imageUrl;
  const duration = route.params.duration;
  const complexity = route.params.complexity;
  const affordability = route.params.affordability;
  const ingredients = route.params.ingredients;
  const steps = route.params.steps;
  // const mealId = route.params.mealId;

  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoriteMealIds.includes(mealId);

  // function changeFavouriteStatusHandler() {
  //   if (mealIsFavorite) {
  //     dispatch(removeFavorite({ id: mealId }));
  //   } else {
  //     dispatch(addFavorite({ id: mealId }));
  //   }
  // }

  const handleheader = () => {
    console.log("clicked!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            onPress={handleheader}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, handleheader]);

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetailsComponent
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />

      <View style={{ alignItems: "center" }}>
        <View style={{ maxWidth: 400 }}>
          <Text style={styles.subtitle}>INGREDIENTS</Text>

          <View style={styles.listitem}>
            {ingredients.map((ingredients) => (
              <Text style={styles.listText} key={ingredients}>
                {ingredients}
              </Text>
            ))}
          </View>

          <Text style={styles.subtitle}>STEPS</Text>

          <View style={styles.listitem}>
            {steps.map((steps) => (
              <Text style={styles.listText} key={steps}>
                {steps}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listitem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listText: {
    textAlign: "center",
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
