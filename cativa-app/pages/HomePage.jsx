import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { View, StyleSheet } from "react-native";
import BottomNavigation from "../components/BottomNavigation";


const HomePage = () => {
    return (
        <View style={styles.container}>
            <MaterialDesignIcons name="home" color="#ff0000" size={20} />

            <BottomNavigation/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffffff", // Amarelo claro do fundo
        justifyContent: "center",
    },
})
export default HomePage;