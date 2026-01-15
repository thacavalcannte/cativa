import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogInPage({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/* Imagem do logo! PRECISA TROCAR POR UMA DE MELHOR QUALIDADE ATÉ SVG SE FOR POSSÍVEL */}
                <Image 
                    source={require("../assets/logoPngBaixaQualidade.png")}
                    style={styles.logoImage} 
                    resizeMode="center"/>
            </View>

            <View style={styles.googleLogoContainer}>
                <TouchableOpacity onPress={() => console.log('autenticar com google')} activeOpacity={0.7}> 
                    {/* // ele faz ser clicável */}
                    <Image
                        source={{uri: 'https://i.pinimg.com/1200x/50/96/e7/5096e746d19b9c407089dfd220471bbe.jpg'}}
                        style={{ width: 25, height: 25,}}
                        // tamanho que está no protótipo, mas contando o tamanho inteiro junto com a borda
                        
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
                <TextInput 
                    label="E-mail"
                    value={email}
                    mode="outlined"
                    placeholder="Digite seu email"
                    onChangeText={email => setEmail(email)}
                    activeOutlineColor="#5D8251"  //ajustar para as cores da idv
                    outlineColor="#5D8251" //ajustar para as cores da idv
                    style={styles.input} />
                <TextInput 
                    label="Senha"
                    value={password}
                    mode="outlined"
                    placeholder="Digite sua senha"
                    onChangeText={password => setPassword(password)}
                    secureTextEntry ={true}
                    activeOutlineColor="#5D8251"  //ajustar para as cores da idv
                    outlineColor="#5D8251" //ajustar para as cores da idv 
                    style={styles.input} />
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </View>

            {/* Botão de entrar */}
            <Button 
                    mode="contained" 
                    onPress={() => navigation.replace('Home')}
                    buttonColor="#5D8251" // ajustar para as cores da idv
                    style={styles.logInButton}>
                        Entrar
            </Button>

            {/* Texto de se não tiver conta cadastre-se */}
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Ainda não tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.replace('SignUp')} activeOpacity={0.7}>
                    <Text style={styles.signUpLink}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:12, marginBottom: -40, marginTop: 70, alignSelf:'center'}}>Produzido por ESO Design</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffffff", // Amarelo claro do fundo
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    logoImage: {
        width: 200,
        height: 200,
    },
    googleLogoContainer: {
        borderWidth: 1,
        width: 35,
        height: 35,
        borderRadius: 22.5,
        borderColor: '#5D8251',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // centraliza na largura da tela
        marginTop: -15, // aproxima mais do logo da cativa
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#ffffffff",
        width: "100%", // não sei por que não ta pegando a largura toda......aaaaa
    },
    forgotPassword: {
        textAlign: "left",
        fontSize: 14,
        color: "#333",
        marginTop: 5,
    },
    logInButton: {
        backgroundColor: "#5D8251", 
        borderRadius: 20,
            
    },
    signUpContainer: {
        marginTop: 40,
        alignItems: "flex-start", //alinha da esquerda pra direita
    },
    signUpText: {
        fontSize: 16,
        color: "#333",
    },
    signUpLink: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: 5,
    },

})