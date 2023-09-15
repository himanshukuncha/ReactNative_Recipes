import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetailsComponent from "../MealDetailsComponent";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  ingredients,
  steps,
}) {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      id: id,
      title: title,
      imageUrl: imageUrl,
      duration: duration,
      affordability: affordability,
      complexity: complexity,
      ingredients: ingredients,
      steps:steps
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ffc529" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetailsComponent
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
        
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
