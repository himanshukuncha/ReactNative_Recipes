import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Icon = ({onPress, icon, color}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default Icon;

const styles=StyleSheet.create({
  pressed:{
    opacity:0.7
  }
})