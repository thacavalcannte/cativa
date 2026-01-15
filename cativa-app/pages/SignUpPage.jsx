import React from "react";
import { StyleSheet, View, ScrollView,} from "react-native";
import { TextInput, } from "react-native-paper";
import AppBar from "../components/layout/AppBar";
import ButtonComponent from "../components/ButtonComponent";


export default function SignUpPage({navigation}) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");  

    return (
        <View style={styles.container}>
            <AppBar title={'Cadastro'} backTo={'Login'} showBack={true}/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.formContainer}>
                <TextInput 
                    label="Nome"
                    value={name}
                    mode="outlined"
                    placeholder="Digite seu nome"
                    onChangeText={name => setName(name)}
                    activeOutlineColor="#283F25"
                    outlineColor="#52804C" 
                    style={styles.input} />
                <TextInput 
                    label="Email"
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
                <TextInput 
                    label="Confirmar senha"
                    value={confirmPassword}
                    mode="outlined"
                    placeholder="Digite sua senha"
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                    secureTextEntry ={true}
                    activeOutlineColor="#283F25" 
                    outlineColor="#52804C"  
                    style={styles.input} />
            </View>

            <View style={{width:'100%', alignItems:'center'}}>
                <ButtonComponent label={"Cadastrar"} replaceTo={'Home'}/>
            </View>

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
        paddingHorizontal: 30, 
        paddingBottom: 40,
        justifyContent: "center",
    },
    formContainer: {
        marginTop: 20,
        marginBottom: 20,
        gap:20,
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
