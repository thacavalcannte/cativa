import { StyleSheet, Text, View } from "react-native"
import BottomNavigationComponent from "../components/BottomNavigationComponent";

const ListPage = () => {
    return (
        <View style= {styles.container}>
            <Text>
                Página de lista de eventos e exposições
            </Text>
            <BottomNavigationComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fffff",
        justifyContent: "center"
    },

})

export default ListPage;