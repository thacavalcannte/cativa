import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ProfilePage from "./pages/ProfilePage";
import ConfirmPage from "./pages/ConfirmPage";
import SignUpPage from "./pages/SignUpPage";
import EventPage from "./pages/EventPage"; 
import ExposicaoPage from "./pages/ExposicaoPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LogInPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="List" component={ListPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Confirm" component={ConfirmPage} />
          <Stack.Screen name="EventPage" component={EventPage} />
          <Stack.Screen name="ExposicaoPage" component={ExposicaoPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
