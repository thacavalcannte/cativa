import { BottomNavigation } from "react-native-paper";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ListPage from "../pages/ListPage";

export default function BottomNavigationComponent () {
    

    const renderScene = BottomNavigation.SceneMap({
        home: HomePage,
        list: ListPage,
        profile: ProfilePage,
    });

    const routes = [
        { key: 'home', title: 'Início', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
        { key: 'list', title: 'Lista de eventos e exposições', focusedIcon: 'book-open-variant', unfocusedIcon: 'book-open-variant-outline' },
        { key: 'profile', title: 'Meu perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ];


    return (
            <BottomNavigation
            navigationState={{ index, routes }}
            renderScene={renderScene}
            />
  );
}

