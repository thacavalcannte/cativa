import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SegmentedButtons } from "react-native-paper";

import AppBar from "../components/layout/AppBar";
import EventCardList from "../components/cardList/EventCardList";
import ExpoCardList from "../components/cardList/ExpoCardList";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";

export default function ContentsScreen() {
  const [value, setValue] = useState("eventos");

  const events = [
    {
      id: "1",
      title: "Ceará Jogos: Roadshow",
      author: "Asa Branca",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdVcmrXEXIb-d8USdMztyTOFmNhTCYZBpGA&s",
    },
    {
      id: "2",
      title: "Arte e Memória na Xilogravura",
      author: "Mestre Stênio Diniz",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2025/10/16112023Sessao-de-fotos-com-Mestre-Stenio-DinizSamuel-Macedo_K5A2766-600x400.jpg",
    },
  ];

  const expos = [
    {
      id: "1",
      title: "Exposição permanente: O Sertão Múltiplo de Cego Aderaldo",
      artist: "Alênio Alencar e Lorena Patricio",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2023/06/Fotos-Pedro-Matheus-Quadros-estarao-no-lancamento-da-Exposicao-2-600x450.jpg",
    },
    {
      id: "2",
      title: "Ancestralidade, Resistência e Transmissão: A Saga do Mestre Stênio Diniz",
      artist: "Mestre Stênio Diniz",
      image: "https://www.secult.ce.gov.br/wp-content/uploads/sites/43/2025/11/IMG_9574-600x400.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <AppBar title={"Conteúdos"} backTo={""} showBack={false} />

      <View style={styles.tabs}>
            <SegmentedButtons
            value={value}
            onValueChange={setValue}
            style={{
                backgroundColor: "transparent", 
            }}
            theme={{
                colors: {
                secondaryContainer: "rgb(224, 236, 223)",
                },
            }}
            buttons={[
                { value: "eventos", label: "Eventos", },
                { value: "exposicoes", label: "Exposições" },
            ]}

            />
      </View>

      <FlatList
        contentContainerStyle={styles.list}
        data={value === "eventos" ? events : expos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          value === "eventos" ? (
            <EventCardList
              title={item.title}
              author={item.author}
              image={item.image}
            />
          ) : (
            <ExpoCardList
              title={item.title}
              artist={item.artist}
              image={item.image}
            />
          )
        }
      />

      <BottomNavigationComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabs: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  list: {
    padding: 16,
    paddingBottom: 80,
  },
});
