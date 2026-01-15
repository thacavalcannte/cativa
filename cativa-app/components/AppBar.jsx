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
      activeColor="#FFFFFF" 
      inactiveColor="#C8E6C9" 
      style={styles.bar} 
      
      theme={{
        colors: {
          secondaryContainer: 'rgba(255, 255, 255, 0.2)', 
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    elevation: 8,
    backgroundColor: '#385F38', 
    justifyContent: 'center',
    alignItens: 'center'

  },
});