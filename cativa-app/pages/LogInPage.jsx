import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput } from "react-native-paper";

// Consegui rodar só uma parte no aplicativo, mas o final não tava carregando. Isto é apenas um esqueleto, ainda tem que ajustar a imagem do logo, os butoes e afins

const LogInPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/* Imagem do logo! PRECISA TROCAR POR UMA DE MELHOR QUALIDADE ATÉ SVG SE FOR POSSÍVEL */}
                <Image source={require("../assets/logoPngBaixaQualidade.png")} 
                        style={styles.logoImage}/>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput label="Email"
                            value={email}
                            mode="outlined"
                            placeholder="Digite seu email"
                            onChangeText={email => setEmail(email)}/>    
                <TextInput label="Password"
                            value={password}
                            mode="outlined"
                            placeholder="Digite sua senha"
                            onChangeText={password => setPassword(password)}/>          
            </View>
            {/* Esqueceu a senha? Deveria ficar dentro do view do forms, já que esse texto fica bem próximo do input de senha? */}
            <View>
                <Text>Esqueceu a senha?</Text>
            </View>

            {/* Botão de entrar */}
            <View>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Entrar
                </Button>
            </View>
            Texto de se não tiver conta cadastre-se
            <View>
                <Text>Ainda não tem conta?</Text>
                <Text>Cadastre-se</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "offwhite",
    },
    logoContainer: {
        height: 20,
    },
    logoImage: {
        flex: 1,
        height: 100,
        width: 100,
    },
    textInputContainer: {

    },

})

export default LogInPage