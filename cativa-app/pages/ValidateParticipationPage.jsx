import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from "../components/layout/AppBar";


export default function ValidateParticipationPage({ navigation }) {
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Validar participação</Text>
        
        <MaterialIcons name="attach-file" size={24} color="#000" />
      </View> */}
      <AppBar title={'Validar Participação'} backTo={''} showBack={true}/>
      

      <Text style={styles.description}>
        Para que sua participação seja validada, você precisará seguir os seguintes passos:
      </Text>

      <View style={styles.stepsContainer}>
        <Text style={styles.stepText}>1. Ir ao espaço onde ocorrerá a oficina;</Text>
        <Text style={styles.stepText}>2. Produzir o projeto proposto pelo artista;</Text>
        <Text style={styles.stepText}>3. Tirar uma foto com o artista, enquanto segura sua produção;</Text>
        <Text style={styles.stepText}>4. Por fim, envie no espaço abaixo a foto registrada e aguarde o resultado da análise.</Text>
      </View>

      <View style={styles.uploadArea}>
        <View style={styles.placeholder}>
            <View style={styles.shapesContainer}>
              <MaterialIcons name="image" size={50} color="#52804c8d" />
            </View>
        </View>
      </View>

      {/* BOTÃO ENVIAR */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SuccessPage')}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 15, },
  description: { fontSize: 16, color: '#000000', marginBottom: 20, paddingHorizontal: 35  },
  stepsContainer: { marginBottom: 30, paddingHorizontal: 10,},
  stepText: { fontSize: 14, color: '#000000', lineHeight: 22, marginBottom: 5, paddingHorizontal: 30 },
  
  uploadArea: { alignItems: 'center', marginBottom: 30 },
  placeholder: {
    width: 250, height: 200, backgroundColor: '#e0ecdf', borderRadius: 20,
    justifyContent: 'center', alignItems: 'center'
  },
  shapesContainer: { flexDirection: 'row', gap: 10 },
  
  button: { 
    backgroundColor: '#52804C', 
    paddingVertical: 15, 
    borderRadius: 10, 
    alignItems: 'center',
    margin: 30,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});