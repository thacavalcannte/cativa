import { BottomNavigation } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function BottomNavigationComponent() {
  const navigation = useNavigation();
  const route = useRoute();

  const routes = [
    { key: 'Home', title: 'Início', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'List', title: 'Conteúdo', focusedIcon: 'book-open-variant', unfocusedIcon: 'book-open-variant-outline' },
    { key: 'Profile', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ];

  const getIndexFromRoute = () => {
    // Verifica se a rota atual existe na lista, se não, não marca nada ou marca o padrão
    const index = routes.findIndex(r => r.key === route.name);
    return index === -1 ? 0 : index;
  };

  return (
    <BottomNavigation.Bar
      navigationState={{
        index: getIndexFromRoute(),
        routes,
      }}
      onTabPress={({ route }) => {
        navigation.navigate(route.key);
      }}
      labeled
      
      // --- AQUI ESTÃO AS MUDANÇAS DE COR ---
      activeColor="#FFFFFF" // Ícone e texto selecionado (Branco)
      inactiveColor="#C8E6C9" // Ícone e texto NÃO selecionado (Verde claro)
      style={styles.bar} // O fundo verde escuro está no styles.bar abaixo
      
      // Isso muda a cor da "bolinha" (pílula) atrás do ícone selecionado
      theme={{
        colors: {
          secondaryContainer: 'rgba(255, 255, 255, 0.2)', // Uma transparência branca
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    elevation: 8,
    backgroundColor: '#385F38', // <--- O VERDE ESCURO DO SEU TEMA (Ajuste se precisar)
  },
});