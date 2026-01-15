import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import AppBar from "../components/layout/AppBar";


import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";

export default function ProfilePage({ navigation }) {


  return (
    <View style={styles.container}>
      
      {/* Cabeçalho */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="#000" />
        </TouchableOpacity>
      </View> */}
      <AppBar title={'Perfil'} backTo={''} showBack={false}/>
      

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>M</Text>
          </View>
        </View>

        {/* Barra de Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelHeader}>
            <Text style={styles.levelTitle}>Nível 2</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '60%' }]} /> 
          </View>
          <View style={styles.xpRow}>
            <Text style={styles.xpText}>100 XP</Text>
            <Text style={styles.xpText}>200 XP</Text>
          </View>
        </View>

        {/* Campos de Informação */}
        <View style={styles.infoSection}>
          <InfoField label="Nome" value="Marcos Devaner" />
          <InfoField label="Email" value="marcosdevaner@ufc.br" />
          <InfoField label="Senha" value="*******" />
        </View>

        {/* BOTÃO DE SAIR */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
          <MaterialIcons name="logout" size={24} color="#000" style={{marginRight: 10}}/>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Navegação Inferior */}
      <BottomNavigationComponent />

    </View>
  );
}

const InfoField = ({ label, value }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <Text style={styles.fieldValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, 
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#557C55', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  levelContainer: {
    marginBottom: 30,
  },
  levelTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#E0D4E0', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2E4F2F', 
    borderRadius: 5,
  },
  xpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  xpText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  infoSection: {
    gap: 15,
  },
  fieldContainer: {
    backgroundColor: '#FCF5FC', 
    padding: 15,
    borderRadius: 8,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  fieldValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20, 
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
  },
});