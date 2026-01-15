import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import EventCard from "../components/EventCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";
import { useEffect, useState } from "react";
import { getEvents } from "../api/eventService";
import { getExpos } from "../api/expoService";

const HomePage = ({ navigation }) => {
    const [events, setEvents] = useState([]);
    const [expos, setExpos] = useState([]);

    useEffect(() => {
        (async () => {
            try {
            const eventsData = await getEvents();
            setEvents(eventsData);

            const exposData = await getExpos();
            setExpos(exposData);
            } catch (e) {
            console.log("Erro:", e);
            }
        })();
    }, []);

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
                        <Text style={styles.sectionTitle}>Eventos →</Text>
                    </View>

                    {events.map((event) => (
                        <TouchableOpacity
                            key={event.id}
                            onPress={() => {
                            // console.log("clicou no evento:", event);
                                navigation.navigate('EventPage', { id: event.id });
                            }}
                            activeOpacity={0.9} >
                            <EventCard
                                title={event.title}
                                author={event.author}
                                image={event.image}
                            />
                        </TouchableOpacity>
                    ))}

                    {/* Exposições */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Exposições →</Text>
                    </View>

                    {expos.map((expo) => (
                        <TouchableOpacity
                            key={expo.id}
                            onPress={() => {
                            // console.log("clicou no evento:", event);
                                navigation.navigate('ExposicaoPage', { id: expo.id });
                            }}
                            activeOpacity={0.9} >
                            <EventCard
                                title={expo.title}
                                author={expo.artist}
                                image={expo.image}
                            />
                        </TouchableOpacity>
                    ))}

                    {/* Voluntário */}
                    <View style={styles.volunteerSection}>
                        <Text style={styles.volunteerTitle}>Seja Voluntário</Text>

                        <TouchableOpacity style={styles.volunteerButton}>
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
        marginTop: 30,
        marginBottom: 40,
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