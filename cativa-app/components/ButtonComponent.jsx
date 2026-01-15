import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function ButtonComponent({label, replaceTo, disabled = (false)}) {
  const navigation = useNavigation();

  function handlePress() {
    if (replaceTo) {
      navigation.replace(replaceTo);
    }
  }

  return (
    <Button
      mode="contained"
      onPress={handlePress}
      disabled={disabled}
      contentStyle={styles.content}
      style={styles.button}
      labelStyle={styles.label} >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#52804C",
  },
  content: {
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
  label: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
