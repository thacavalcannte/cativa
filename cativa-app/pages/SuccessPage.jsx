import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from "../components/layout/AppBar";
import ButtonComponent from "../components/ButtonComponent";


export default function SuccessPage() {
  return (
    <View style={styles.container}>
      <AppBar title={''} backTo={''} showBack={true}/>

      <View style={styles.content}>
       <Image
        source={require('../assets/confirmpng.png')}
        style={styles.image}
        />

        <Text style={styles.title}>Ihul! Sua solicitação foi enviada!</Text>
        <Text style={styles.description}>
          O resultado da análise sairá em breve. Você poderá conferir o status no <Text style={styles.bold}>seu email</Text> cadastrado na plataforma.
        </Text>


        <View style={{width:'100%', alignItems:'center'}}>
            <ButtonComponent label={"Voltar para a tela inicial"} replaceTo={'Home'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  image: { width: 300, height: 250, marginBottom: 40, resizeMode: 'contain' }, 
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'left', marginBottom: 15, color: '#000000', paddingHorizontal:30 },
  description: { fontSize: 16, textAlign: 'left', color: '#000000', marginBottom: 40, lineHeight: 24, paddingHorizontal: 30,},
  bold: { fontWeight: 'bold', textDecorationLine: 'underline' },
  button: { backgroundColor: '#52804C', paddingVertical: 15, borderRadius: 15, width: '100%' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});