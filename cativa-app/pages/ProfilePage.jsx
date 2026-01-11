import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "firebase/auth";

const ProfilePage = () => {

    return (
        <View style={{ flex: 1 }}>            
            <Text>
                Página de perfil
            </Text>

            <View>
                {/* vídeo de referencia (adaptei para o native): https://www.youtube.com/watch?v=WkP6KgqWrX8&t=462s */}
                <TouchableOpacity onPress={() => signOut(auth)}>
                    <Text> Log out (mudar para botão) </Text>
                </TouchableOpacity>
            </View>
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

export default ProfilePage;