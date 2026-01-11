import { View, Text } from "react-native"

const HomePage= () => {
    return (
        <View style ={{
            flex: 1,
            backgroundColor: "#ffb39c",
            justifyContent: "center",
        }}>
            <Text> Página inicial</Text>
        <View style= {{
            backgroundColor: "#4d5b70", // cor aleatória somente pra identidicar     
        }}>
            <Text> Bottom Navigation não vai ser chamado nas telas, mas no app</Text>
        </View>
        </View>
    )
};


export default HomePage;