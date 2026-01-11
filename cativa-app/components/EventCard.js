import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EventCard = ({ title, author, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardAuthor}>{author}</Text>
            </View>
        </View>
    );
};

export default EventCard;

const styles = StyleSheet.create({
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
});
