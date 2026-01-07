import { BottomNavigation } from "react-native-paper";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ListPage from "../pages/ListPage";
import { View } from "react-native";

//precisa importar as telas HomePage, ListPage e ProfilePage
const HomePage = () => <HomePage/>
const ListPage = () => <ListPage/>
const ProfilePage = () => <ProfilePage/>

const BottomNavigation = () => {
    const [index, setIndex] = React.useState(0);

    //preciso ajustar os nomes, tenho que ir jantar THAYNA 17:02 (07/01/2026)
    const [routes] = React.useState([
    { key: 'home', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    });

    return (
        <View>
            <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            />
        </View>

  );


}
export default BottomNavigation;