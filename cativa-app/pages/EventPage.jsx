import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AppBar from '../components/layout/AppBar'
import {getEventById} from '../api/eventService'

export default function EventPage({ navigation, route }) {
  const {id} = route.params //pega o id dos parâmetros da rota
  const [event, setEvent] = useState(null); // estado para armazenar os dados do evento

  const heroSource = event?.image 
    ? { uri: event.image } //usa a imagem da url
    : require("../assets/evento1.jpg"); //senão, usa a imagem local como fallback

  useEffect(() => {
    // SERVIDOR: buscar evento pelo id
    (async () => {
      try {
        const data = await getEventById(id); // chama a API
        setEvent(data); // atualiza o estado
      } catch (e) {
        console.log("Erro ao buscar evento:", e);
      }
    })();
  }, [id]); // executa quando o id mudar

  if (!event) { // enquanto os dados não carregaram; exibe um loading
    return ( 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <AppBar title={'Evento'} backTo={''} showBack={true}/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
            <Image 
                source={heroSource} 
                style={styles.heroImage}
            />
            
            <View style={styles.tagsContainer}>
                <View style={styles.tagOficina}>
                    <Text style={styles.tagOficinaText}>OFICINA</Text>
                </View>
                <View style={styles.tagLivre}>
                    <Text style={styles.tagLivreText}>L</Text>
                </View>
            </View>
        </View>

        {/*  CONTEÚDO  */}
        <View style={styles.content}>
            
            <Text style={styles.title}>
                {event.title}
            </Text>

            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>
                {event.description} 
            </Text>

            {/*  DATAS E HORÁRIOS */}
            <View style={styles.scheduleContainer}>
                <Text style={styles.dayTitle}>DIA 1</Text>
                <View style={styles.row}>
                    <MaterialIcons name="calendar-today" size={16} color="black" />
                    <Text style={styles.infoText}>Data: 31 de outubro de 2025</Text>
                </View>
                <View style={styles.row}>
                    <MaterialIcons name="access-time" size={16} color="black" />
                    <Text style={styles.infoText}>Horário: 14h às 18h</Text>
                </View>

                <Text style={[styles.dayTitle, { marginTop: 10 }]}>DIA 2</Text>
                <View style={styles.row}>
                    <MaterialIcons name="calendar-today" size={16} color="black" />
                    <Text style={styles.infoText}>Data: 1 de novembro de 2025</Text>
                </View>
                <View style={styles.row}>
                    <MaterialIcons name="access-time" size={16} color="black" />
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

            {/* BOTÃO CONFIRMAR */}
            <TouchableOpacity 
                style={styles.confirmButton}
                onPress={() => navigation.navigate('ValidateParticipationPage')}
            > 
                <Text style={styles.confirmButtonText}>Confirmar | +10 XP</Text>
            </TouchableOpacity>

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
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  tagOficina: {
    backgroundColor: '#FBEABC', // 
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom:25,
  },
  tagOficinaText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3E2723',
  },
  tagLivre: {
    backgroundColor: '#4CAF50', //
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
    fontSize: 22,
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
  scheduleContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
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