import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SegmentedButtons } from "react-native-paper";

import AppBar from "../components/layout/AppBar";
import EventCardList from "../components/cardList/EventCardList";
import ExpoCardList from "../components/cardList/ExpoCardList";
import BottomNavigationComponent from "../components/layout/BottomNavigationComponent";
import { getEvents } from '../api/eventService';
import { getExpos } from "../api/expoService";

export default function ContentsScreen() {
  const [value, setValue] = useState("eventos");
  const [events, setEvents] = useState([]); //SERVIDOR: lista vem da API
  const [expos, setExpos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [eventsData, exposData] = await Promise.all([
          getEvents(),
          getExpos(),
        ]);

        setEvents(Array.isArray(eventsData) ? eventsData : []); //transforma em array pq flatlist so funciona com array e o que é retornado da api não era
        setExpos(Array.isArray(exposData) ? exposData : []);
      } catch (e) {
        console.log("Erro ao buscar conteúdos:", e);
      }
    })();
  }, []);

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
    paddingHorizontal: 30,
    paddingTop: 8,
  },
  list: {
    padding: 16,
    paddingHorizontal: 30,
    paddingBottom: 80,
  },
});
