import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from "../components/layout/AppBar";
import ButtonComponent from "../components/ButtonComponent";


export default function ExposicaoPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity> */}
      <AppBar title={'Exposição'} backTo={''} showBack={true}/>
      

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* IMAGEM DE CAPA */}
        <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/expo3.jpg')} 
                style={styles.heroImage} 
            />
            
            <View style={styles.tagsContainer}>
                <View style={styles.tagLivre}>
                    <Text style={styles.tagLivreText}>L</Text>
                </View>
            </View>
        </View>

        {/* CONTEÚDO */}
        <View style={styles.content}>
            
            <Text style={styles.title}>
                Exposição Permanente: “O Sertão Múltiplo de Cego Aderaldo” por Alênio Alencar e Lorena Patricio
            </Text>

            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>
                Mapear histórias, xilografar memórias. A vida do poeta Cego Aderaldo é aqui revisitada em sua multiplicidade: poeta, cantador e violeiro; pai e filho; exibidor de filmes e comerciante. Sua trajetória mostra como arte e cultura se tornaram resistência frente às adversidades. Uma celebração de sua força criadora e da vitalidade do sertão.
            </Text>

            {/* DATAS E HORÁRIOS */}
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <MaterialIcons name="calendar-today" size={18} color="black" />
                    <Text style={styles.infoText}>Data: Terça a sexta-feira</Text>
                </View>
                <View style={styles.row}>
                    <MaterialIcons name="access-time" size={18} color="black" />
                    <Text style={styles.infoText}>Horário: 08h às 12h e 14h às 18h</Text>
                </View>
            </View>

            {/* LOCAL */}
            <View style={styles.locationContainer}>
                <View style={styles.locationRow}>
                    <MaterialIcons name="location-on" size={20} color="black" />
                    <Text style={styles.locationText}>
                        Local: Rua Pascoal Crispino, 167 Varanda da Casa de Saberes Cego Aderaldo.
                    </Text>
                </View>
                <TouchableOpacity style={styles.mapButton}>
                    <MaterialIcons name="map" size={16} color="black" style={{marginRight:5}}/>
                    <Text style={styles.mapButtonText}>VER LOCAL</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footerNote}>
                Para mais informações, acesse o perfil do Instagram da <Text style={{textDecorationLine: 'underline'}}>Casa de Saberes Cego Aderaldo</Text>
            </Text>
            
            <View style={{width:'100%', alignItems:'center'}}>
                <ButtonComponent label={"Confirmar | +20 XP"} replaceTo={'ValidateParticipationPage'} />
            </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 5,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tagsContainer: {
    position: 'absolute',
    bottom: -15,
    right: 20, 
    alignItems: 'flex-end',
  },
  tagLivre: {
    backgroundColor: '#4CAF50',
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  tagLivreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  infoContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
    fontWeight: '500', 
  },
  locationContainer: {
    marginBottom: 20,
  },
  locationRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 20,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
  mapButton: {
    backgroundColor: '#E8F5E9',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 28,
  },
  mapButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2E4F2F',
  },
  footerNote: {
    fontSize: 12,
    color: '#777',
    marginBottom: 30,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#557C55',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});