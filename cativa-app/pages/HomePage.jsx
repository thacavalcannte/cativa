// import React from "react";
// import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
// import EventCard from "../components/EventCard";
// import { SafeAreaView } from "react-native-safe-area-context";
// import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";
// import { useEffect, useState } from "react";
// import { getEvents } from "../api/eventService";
// import { getExpos } from "../api/expoService";

// const HomePage = ({ navigation }) => {
//     const [events, setEvents] = useState([]);
//     const [expos, setExpos] = useState([]);

//     useEffect(() => {
//         (async () => {
//             try {
//             const eventsData = await getEvents();
//             setEvents(eventsData);

//             const exposData = await getExpos();
//             setExpos(exposData);
//             } catch (e) {
//             console.log("Erro:", e);
//             }
//         })();
//     }, []);

//     return (
//         <SafeAreaView style={{flex:1}}>
//             <View style={{flex:1}}>
//                 <ScrollView style={styles.container}>
//                     <View style={styles.header}>
//                         <Text style={styles.title}>CATIVA</Text>

//                         <View style={styles.userRow}>
//                             <Text style={styles.helloText}>Olá, Marcos!</Text>

//                             <View style={styles.xpBadge}>
//                                 <Text style={styles.xpText}>☆ 120 XP</Text>
//                             </View>
//                         </View>

//                         <Text style={styles.subtitle}>
//                             A Cativa possui eventos e exposições esperando por você!
//                         </Text>
//                     </View>

//                     {/* Eventos */}
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionTitle}>Eventos →</Text>
//                     </View>

//                     {events.map((event) => (
//                         <TouchableOpacity
//                             key={event.id}
//                             onPress={() => {
//                             // console.log("clicou no evento:", event);
//                                 navigation.navigate('EventPage', { id: event.id });
//                             }}
//                             activeOpacity={0.9} >
//                             <EventCard
//                                 title={event.title}
//                                 author={event.author}
//                                 image={event.image}
//                             />
//                         </TouchableOpacity>
//                     ))}

//                     {/* Exposições */}
//                     <View style={styles.sectionHeader}>
//                         <Text style={styles.sectionTitle}>Exposições →</Text>
//                     </View>

//                     {expos.map((expo) => (
//                         <TouchableOpacity
//                             key={expo.id}
//                             onPress={() => {
//                             // console.log("clicou no evento:", event);
//                                 navigation.navigate('ExposicaoPage', { id: expo.id });
//                             }}
//                             activeOpacity={0.9} >
//                             <EventCard
//                                 title={expo.title}
//                                 author={expo.artist}
//                                 image={expo.image}
//                             />
//                         </TouchableOpacity>
//                     ))}

//                     {/* Voluntário */}
//                     <View style={styles.volunteerSection}>
//                         <Text style={styles.volunteerTitle}>Seja Voluntário</Text>

//                         <TouchableOpacity style={styles.volunteerButton}>
//                             <Text style={styles.volunteerButtonText}>Quero ser voluntário</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>


//             </View>
//             <View style={styles.bottomNavContainer}>
//                     <BottomNavigationComponent />
//                 </View>
//         </SafeAreaView>
    
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingHorizontal: 30,

//     },

//     bottomNavContainer: {
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         right: 0,
//     },

//     header: {
//         marginTop: 20,
//         marginBottom: 20,
//     },

//     title: {
//         textAlign: "center",
//         fontSize: 22,
//         marginBottom: 20,
        
//     },

//     userRow: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//     },

//     helloText: {
//         fontSize: 22,
//         fontWeight: "bold",
//     },

//     xpBadge: {
//         backgroundColor: "#2E5E2E",
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 20,
//     },

//     xpText: {
//         color: "#fff",
//         fontWeight: "bold",
//     },

//     subtitle: {
//         marginTop: 20,
//         color: "#555",
//     },

//     sectionHeader: {
//         marginTop: 20,
//         marginBottom: 10,
//     },

//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: "bold",
//     },

//     card: {
//         backgroundColor: "#E8F1E6",
//         borderRadius: 16,
//         marginBottom: 16,
//         overflow: "hidden",
//     },

//     cardImage: {
//         width: "100%",
//         height: 140,
//     },

//     cardContent: {
//         padding: 12,
//     },

//     cardTitle: {
//         fontSize: 16,
//         fontWeight: "bold",
//     },

//     cardAuthor: {
//         fontSize: 14,
//         color: "#444",
//         marginTop: 4,
//     },

//     volunteerSection: {
//         marginTop: 30,
//         marginBottom: 40,
//     },

//     volunteerTitle: {
//         fontSize: 18,
//         marginBottom: 12,
//     },

//     volunteerButton: {
//         backgroundColor: "#5D8251",
//         padding: 14,
//         borderRadius: 20,
//         alignItems: "center",
//     },

//     volunteerButtonText: {
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 16,
//     },
// });

// export default HomePage;

import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Linking} from "react-native";
import EventCard from "../components/EventCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";


const HomePage = ({ navigation }) => {

    const handleVoluntarioEmail = () => {
    const email = "ascom.csca@idm.org.br";
    const url = `mailto:${email}`;

    Linking.openURL(url).catch((err) => 
        console.error("Erro ao abrir o aplicativo de e-mail", err)
    );
};

    const events = [
    {
      id: "1",
      title: "Ceará Jogos: Roadshow",
      author: "Asa Branca",
      description: "O Roadshow Ceará Jogos é uma mostra itinerante que celebra a potência da indústria de games em nosso estado. O evento reúne desenvolvedores locais, estudantes e entusiastas para rodadas de conversa sobre criação de jogos, além de estações de gameplay com títulos produzidos integralmente por estúdios cearenses. Venha conhecer quem faz o jogo acontecer no Ceará!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdVcmrXEXIb-d8USdMztyTOFmNhTCYZBpGA&s",
    },
    {
      id: "2",
      title: "Arte e Memória na Xilogravura",
      author: "Mestre Stênio Diniz",
      description: "Nesta oficina imersiva, o Mestre Stênio Diniz compartilha os segredos da técnica que é um dos pilares da identidade visual do Nordeste. Os participantes aprenderão desde o entalhe básico na madeira até a entintagem e a impressão no papel, compreendendo como a xilogravura preserva as histórias e a memória do nosso povo através das gerações.",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2025/10/16112023Sessao-de-fotos-com-Mestre-Stenio-DinizSamuel-Macedo_K5A2766-600x400.jpg",
    },
  ];


  const expos = [
    {
      id: "1",
      title: "Exposição permanente: O Sertão Múltiplo de Cego Aderaldo",
      artist: "Alênio Alencar e Lorena Patricio",
      description: "Uma jornada sensorial pela vida e obra de um dos maiores mitos da cultura popular brasileira. A exposição permanente utiliza fotografias, áudios históricos e objetos pessoais para narrar a trajetória do poeta e repentista Cego Aderaldo. Explore as múltiplas facetas do sertão através do olhar (e da voz) de quem transformou a cegueira em uma visão poética infinita.",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2023/06/Fotos-Pedro-Matheus-Quadros-estarao-no-lancamento-da-Exposicao-2-600x450.jpg",
    },
    {
      id: "2",
      title: "Ancestralidade, Resistência e Transmissão: A Saga do...",
      artist: "Mestre Stênio Diniz",
      description: "Esta exposição mergulha nas raízes das tradições cearenses, destacando o papel fundamental dos mestres de cultura na transmissão de saberes. Através de peças raras e narrativas visuais, a mostra revela como a resistência cultural moldou nossa identidade e como o conhecimento ancestral continua vivo, pulsante e pronto para ser passado adiante.",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2025/11/IMG_9574-600x400.jpg",
    },
  ];
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>CATIVA</Text>


                        <View style={styles.userRow}>
                            <Text style={styles.helloText}>Olá, Marcos!</Text>


                            <View style={styles.xpBadge}>
                                <Text style={styles.xpText}>☆ 120 XP</Text>
                            </View>
                        </View>


                        <Text style={styles.subtitle}>
                            A Cativa possui eventos e exposições esperando por você!
                        </Text>
                    </View>


                    {/* Eventos */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Eventos</Text>
                        </View>


                        {events.map((event) => (
                        <TouchableOpacity
                            key={`evenet-${event.id}`}
                            onPress={() => navigation.navigate("EventPage", { id: event.id,
                                initialData: event
                             })}
                            activeOpacity={0.9}
                        >
                            <EventCard
                            title={event.title}
                            author={event.author}
                            image={{ uri: event.image }}
                            />
                    </TouchableOpacity>
                    ))}


                    {/* Exposições */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Exposições</Text>
                    </View>


                    {expos.map((expo) => (
                    <TouchableOpacity
                        key={`expo-${expo.id}`}
                        onPress={() => navigation.navigate("ExposicaoPage", { 
                            id: expo.id,
                            initialData: expo })}
                        activeOpacity={0.9}
                    >
                        <EventCard
                        title={expo.title}
                        author={expo.author}
                        image={{ uri: expo.image }}
                        />
                    </TouchableOpacity>
                    ))}




                    {/* Voluntário */}
                    <View style={styles.volunteerSection}>
                        <Text style={styles.volunteerTitle}>Seja Voluntário</Text>


                        <TouchableOpacity style={styles.volunteerButton} onPress={handleVoluntarioEmail}>
                            <Text style={styles.volunteerButtonText}>Quero ser voluntário</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>




            </View>
            <View style={styles.bottomNavContainer}>
                    <BottomNavigationComponent />
                </View>
        </SafeAreaView>
   
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,


    },


    bottomNavContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },


    header: {
        marginTop: 20,
        marginBottom: 20,
    },


    title: {
        textAlign: "center",
        fontSize: 22,
        marginBottom: 20,
       
    },


    userRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },


    helloText: {
        fontSize: 22,
        fontWeight: "bold",
    },


    xpBadge: {
        backgroundColor: "#2E5E2E",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },


    xpText: {
        color: "#fff",
        fontWeight: "bold",
    },


    subtitle: {
        marginTop: 20,
        color: "#555",
    },


    sectionHeader: {
        marginTop: 20,
        marginBottom: 10,
    },


    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },


    card: {
        backgroundColor: "#E8F1E6",
        borderRadius: 16,
        marginBottom: 16,
        overflow: "hidden",
    },


    cardImage: {
        width: "100%",
        height: 140,
    },


    cardContent: {
        padding: 12,
    },


    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },


    cardAuthor: {
        fontSize: 14,
        color: "#444",
        marginTop: 4,
    },


    volunteerSection: {
        marginTop: 10,
        marginBottom: 120,
    },


    volunteerTitle: {
        fontSize: 18,
        marginBottom: 12,
    },


    volunteerButton: {
        backgroundColor: "#5D8251",
        padding: 14,
        borderRadius: 20,
        alignItems: "center",
    },


    volunteerButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});


export default HomePage;
