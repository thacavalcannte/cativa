import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import ButtonComponent from "../components/ButtonComponent";

export default function LogInPage({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../assets/logoPngBaixaQualidade.png")}
                    style={styles.logoImage} 
                    resizeMode="center"/>
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                    label="E-mail"
                    value={email}
                    mode="outlined"
                    placeholder="Digite seu email"
                    onChangeText={email => setEmail(email)}
                    activeOutlineColor="#283F25"  
                    outlineColor="#52804C" 
                    style={styles.input} />
                <TextInput 
                    label="Senha"
                    value={password}
                    mode="outlined"
                    placeholder="Digite sua senha"
                    onChangeText={password => setPassword(password)}
                    secureTextEntry ={true}
                    activeOutlineColor="#283F25"  
                    outlineColor="#52804C" 
                    style={styles.input} />
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </View>

            <View style={{width:'100%', alignItems:'center'}}>
                <ButtonComponent label={"Entrar"} replaceTo={'Home'} />
            </View>

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
        backgroundColor: "#fff", 
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    logoImage: {
        width: 200,
        height: 200,
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
    },
    forgotPassword: {
        textAlign: "left",
        fontSize: 14,
        color: "#000000",
        marginTop: 5,
    },
    logInButton: {
        backgroundColor: "#52804C", 
        borderRadius: 20,
            
    },
    signUpContainer: {
        marginTop: 40,
        alignItems: "flex-start", 
    },
    signUpText: {
        fontSize: 16,
        color: "#000000",
    },
    signUpLink: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginTop: 5,
    },

})