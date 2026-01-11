import { StyleSheet, Text, View } from "react-native"

const ListPage = () => {
    return (
        <View style= {styles.container}>
            <Text>
                Página de lista de eventos e exposições
            </Text>
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