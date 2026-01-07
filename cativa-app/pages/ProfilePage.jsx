import { StyleSheet, Text, View } from "react-native"

const ProfilePage = () => {
    return (
        <View style= {styles.container}>
            <Text>
                Página de perfil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "fffff",
        justifyContent: "center"
    },

})

export default ProfilePage;