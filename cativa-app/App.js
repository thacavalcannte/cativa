import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import EventPage from "./pages/EventPage"; 
import ExposicaoPage from "./pages/ExposicaoPage";
import ValidateParticipationPage from "./pages/ValidateParticipationPage";
import SuccessPage from "./pages/SuccessPage";

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
                <Stack.Screen name="EventPage" component={EventPage} />
                <Stack.Screen name="ExposicaoPage" component={ExposicaoPage} />
                <Stack.Screen name="ValidateParticipationPage" component={ValidateParticipationPage} />
                <Stack.Screen name="SuccessPage" component={SuccessPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
   
  );
}
