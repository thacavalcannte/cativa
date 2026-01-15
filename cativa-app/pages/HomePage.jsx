import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import EventCard from "../components/EventCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";

const HomePage = ({ navigation }) => {
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

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('EventPage')}
                        activeOpacity={0.9}
                    >
                        <EventCard
                            title="Arte e Memória na Xilogravura"
                            author="Mestre Stênio Diniz"
                            image={require("../assets/evento1.jpg")}
                        />
                    </TouchableOpacity>

                    <EventCard
                        title="Arte e Memória na Xilogravura"
                        author="Mestre Stênio Diniz"
                        image={require("../assets/evento1.jpg")}
                    />

                    <EventCard
                        title="Ceará Jogos: Roadshow"
                        author="Asa Branca"
                        image={require("../assets/evento2.jpg")}
                    />

                    {/* Exposições */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Exposições →</Text>
                    </View>

                    <EventCard
                        title="Eu no Sertão Monumental"
                        author="César Moura"
                        image={require("../assets/expo1.jpg")}
                    />

                    <EventCard
                        title="Retratos do voo"
                        author="Paulo Aléf"
                        image={require("../assets/expo2.jpg")}
                    />

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('ExposicaoPage')}
                        activeOpacity={0.9}
                    >
                        <EventCard
                            title='Exposição Permanente: "O Sert..."'
                            author="Fábrica Theodoro"
                            image={require("../assets/expo3.jpg")}
                        />
                    </TouchableOpacity>

                    {/* Voluntário */}
                    <View style={styles.volunteerSection}>
                        <Text style={styles.volunteerTitle}>Seja Voluntário</Text>

                        <TouchableOpacity style={styles.volunteerButton}>
                            <Text style={styles.volunteerButtonText}>Quero ser voluntário</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

<BottomNavigationComponent/>
            </View>
        </SafeAreaView>
    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,

    },

    header: {
        marginTop: 40,
        marginBottom: 20,
    },

    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
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
        marginTop: 10,
        color: "#555",
    },

    sectionHeader: {
        marginTop: 25,
        marginBottom: 10,
    },

    sectionTitle: {
        fontSize: 18,
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
