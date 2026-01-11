import React from "react";
import { StyleSheet, View, ScrollView, Image, Text} from "react-native";
import { TextInput, Button, Appbar, Divider } from "react-native-paper";
import AppBar from "../components/AppBar";

// fiz uma versão levemente adaptada do protótipo, vejam se é interessante deixarmos a opção de se cadastrar como o google ou se eu devo tirar. queria adicionar o textinho no divider "ou" mas nao achei como fazer
// https://reactnative.dev/docs/button   linha de separaçao entre os inputs
// const Separator = () => <View style={styles.separator} />;
export default function SignUpPage({navigation}) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");  

    return (
        <View style={styles.container}>
            <AppBar title={"Cadastro"}/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.formContainer}>
                <TextInput 
                    label="Nome"
                    value={name}
                    mode="outlined"
                    placeholder="Digite seu nome"
                    onChangeText={name => setName(name)}
                    activeOutlineColor="#5D8251"  //ajustar para as cores da idv
                    outlineColor="#5D8251" //ajustar para as cores da idv
                    style={styles.input} />
                <TextInput 
                    label="Email"
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
                <TextInput 
                    label="Confirmar senha"
                    value={confirmPassword}
                    mode="outlined"
                    placeholder="Digite sua senha"
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                    secureTextEntry ={true}
                    activeOutlineColor="#5D8251"  //ajustar para as cores da idv
                    outlineColor="#5D8251" //ajustar para as cores da idv 
                    style={styles.input} />

                {/* https://oss.callstack.com/react-native-paper/docs/components/Divider */}
                <Divider style={styles.divider}/>

                <View style={styles.googleLogoContainer}>
                    <Image
                        source={{uri: 'https://i.pinimg.com/1200x/50/96/e7/5096e746d19b9c407089dfd220471bbe.jpg'}}
                        style={{ width: 25, height: 25,}}
                        // tamanho que está no protótipo, mas contando o tamanho inteiro junto com a borda
                    />
                </View>
            </View>

            {/* Botão de entrar */}
            <Button 
                    mode="contained" 
                    onPress={() => navigation.replace('Home')}
                    buttonColor="#5D8251" // ajustar para as cores da idv
                    style={styles.signUpButton}>
                        Cadastrar
            </Button>

            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
    },
    scrollContent: {
        paddingHorizontal: 40, 
        paddingBottom: 40,
        justifyContent: "center",
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
    },
    formContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#ffffff",
        marginBottom: 10,
    },
    divider: {
        marginVertical: 15,
        height: 1,
    },
    signUpButton: {
        borderRadius: 20,
        marginTop: 10,
    },
}); 
