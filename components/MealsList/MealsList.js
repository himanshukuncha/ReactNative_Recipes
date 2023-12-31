import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from './MealItem'


function MealsList({items}) {
  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      ingredients: itemData.item.ingredients,
      steps: itemData.item.steps,
    };
    return <MealItem {...mealItemProps} />;
    
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  container: {
    felx: 1,
    padding: 16,
  },
});