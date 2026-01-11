import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack"

import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ProfilePage from "./pages/ProfilePage";
import ConfirmPage from "./pages/ConfirmPage";

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <SafeAreaProvider>
      <HomePage/>
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LogInPage}/>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="List" component={ListPage}/>
          <Stack.Screen name="Profile" component={ProfilePage}/>
          </Stack.Navigator>
      </NavigationContainer> */}
    </SafeAreaProvider>
  )
}