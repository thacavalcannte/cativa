import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from "../components/layout/AppBar";


export default function SuccessPage({ navigation }) {
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
          O resultado da análise sai em breve. Você poderá conferir o status no <Text style={styles.bold}>seu email</Text> cadastrado na plataforma.
        </Text>

        <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Home')} 
        >
          <Text style={styles.buttonText}>Voltar para a tela inicial</Text>
        </TouchableOpacity>
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