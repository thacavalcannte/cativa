import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import{ PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  return (

    // tive que trocar o safeareaview pelo safeareaprovider porque tava dando erro com o appbar um erro de 'displayName'
    <SafeAreaProvider>
      <PaperProvider>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <SignUpPage />
          {/* <LogInPage/> */}
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </SafeAreaProvider>

  );
}

