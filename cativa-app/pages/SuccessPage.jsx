import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SuccessPage({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

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
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  backButton: { marginTop: 40, marginBottom: 20 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  image: { width: 150, height: 100, marginBottom: 40, resizeMode: 'contain' }, 
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#000' },
  description: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 40, lineHeight: 24 },
  bold: { fontWeight: 'bold', textDecorationLine: 'underline' },
  button: { backgroundColor: '#557C55', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, width: '100%' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});