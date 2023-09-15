import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function CategoryGridTile({ title, onPress, color }) {
  return (
    <View style={[styles.gridItem, 
    { backgroundColor: color }
    ]}>
      <Pressable
        android_ripple={{ color: "#ffc529" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 15,
    // color:"white"
  },
  bgimg: {
    flex: 1,
  },
});
