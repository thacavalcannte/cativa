import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from "../components/layout/AppBar";
import { getExpoById } from "../api/expoService"; // SERVIDOR
import ButtonComponent from "../components/ButtonComponent";


export default function ExposicaoPage({ navigation, route }) {
  const {id, initialData } = route.params || {};

  const [expo, setExpo] = useState(initialData || null);
  const [error, setError] = useState(null);

   const abrirMapa = () => {
      const endereco = "R. Pascoal Crispino, 167, Centro, Quixadá - CE";
      // Criamos a URL específica para mapas (funciona em Android e iOS)
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
      
      Linking.openURL(url).catch(err => console.error("Erro ao abrir o mapa", err));
  };

//   useEffect(() => {
//   if (id == null) return;
//   (async () => {
//     try {
//       const data = await getExpoById(id);
//       if (data) {
//         setExpo(data);
//       } else {
//         throw new Error("Não encontrado");
//       }
//     } catch (e) {
//       console.log("Usando dados locais de fallback...");
//       const mockExpos = {
//         "1": {
//           title: "Exposição permanente: O Sertão Múltiplo de Cego Aderaldo",
//           description: "Uma imersão na vida e obra do mestre da cultura popular Cego Aderaldo.",
//           image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2023/06/Fotos-Pedro-Matheus-Quadros-estarao-no-lancamento-da-Exposicao-2-600x450.jpg"
//         },
//         "2": {
//           title: "Ancestralidade, Resistência e Transmissão",
//           description: "A saga do povo cearense contada através da arte e tradição.",
//           image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2025/11/IMG_9574-600x400.jpg"
//         }
//       };
//       setExpo(mockExpos[id] || mockExpos["1"]);
//     }
//   })();
// }, [id]);

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <AppBar title={"Exposição"} backTo={""} showBack={true} />
//         <View style={{ padding: 20 }}>
//           <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
//         </View>
//       </View>
//     );
//   }

//   if (!expo) {
//     return (
//       <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
//         <Text>Carregando...</Text>
//       </View>
//     );
//   }

//   // Fallback de imagem (se vier null)
//   const heroSource = expo.image ? { uri: expo.image } : require("../assets/expo3.jpg");
useEffect(() => {
        if (!id) {
            setError("ID da exposição não encontrado.");
            return;
        }

        (async () => {
            try {
                // Tenta buscar dados completos (como a descrição longa) no servidor
                const data = await getExpoById(id);
                if (data) {
                    setExpo(data);
                }
            } catch (e) {
                console.log("Erro ao buscar no servidor, mantendo dados iniciais:", e);
                // Se não houver initialData e a API falhar, usamos um mock rápido para não travar
                if (!expo) {
                   setExpo({
                       title: "Carregando título...",
                       description: "Não foi possível carregar a descrição no momento.",
                       image: null
                   });
                }
            }
        })();
    }, [id]);

    if (error) {
        return (
            <View style={styles.container}>
                <AppBar title={"Exposição"} showBack={true} />
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "red" }}>{error}</Text>
                </View>
            </View>
        );
    }

    // Só mostra carregando se realmente não houver dado nenhum (nem initialData nem API)
    if (!expo) {
        return (
            <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    const heroSource = expo.image ? { uri: expo.image } : require("../assets/expo3.jpg");

  return (
    <View style={styles.container}>
      <AppBar title={'Exposição'} backTo={''} showBack={true}/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* IMAGEM DE CAPA */}
        <View style={styles.imageContainer}>
            <Image 
                source={heroSource} 
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
                {expo.title}
            </Text>

            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>
                {expo.description}
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
                <TouchableOpacity style={styles.mapButton} onPress={abrirMapa}>
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