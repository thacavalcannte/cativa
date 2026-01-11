import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text } from "react-native";
import { Appbar } from "react-native-paper";


export default function ConfirmPage() {
    return (
        <SafeAreaView> 
            <View>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => {}}  />
                </Appbar.Header>
            </View>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Image source={require('../assets/confirmpng.png')}
                        resizeMode="center"/>
                        
                <Text style={{marginTop:-180}}>
                    {/* ajustar a margem */}
                    Texto
                </Text>
            </View>

        </SafeAreaView>
    );
}
