import { Card, Text } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function BaseContentCard({ title, subtitle, image }) {
  const source = image ? {uri: image} : fallback; 

  return (
    <Card style={styles.card} elevation={0}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text variant="titleMedium" style={styles.title}>
            {title}
          </Text>
          <Text variant="bodySmall" style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>

        <Image source={source} style={styles.image} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E6F0E6",
    borderRadius: 12,
    marginBottom: 12,
  },
  content: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 4,
    color: "#4F4F4F",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
});
