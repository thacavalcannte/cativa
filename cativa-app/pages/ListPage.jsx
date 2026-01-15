import { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import AppBar from "../components/layout/AppBar";
import EventCardList from "../components/cardList/EventCardList";
import ExpoCardList from "../components/cardList/ExpoCardList";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";


export default function ContentsScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState("eventos");


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
        <TouchableOpacity 
            onPress={() => navigation.navigate("EventPage", { id: item.id, initialData: item })}
        >
            <EventCardList
                title={item.title}
                author={item.author}
                image={item.image}
            />
        </TouchableOpacity>
    ) : (
        <TouchableOpacity 
            onPress={() => navigation.navigate("ExposicaoPage", { id: item.id, initialData: item })}
        >
            <ExpoCardList
                title={item.title}
                artist={item.artist}
                image={item.image}
            />
        </TouchableOpacity>
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
    paddingHorizontal: 30,
    paddingTop: 8,
  },
  list: {
    padding: 16,
    paddingHorizontal: 30,
    paddingBottom: 80,
  },
});

