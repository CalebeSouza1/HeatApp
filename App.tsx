import React from 'react';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import Apploading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/hooks/auth'
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Apploading />
  }

  return (
    <AuthProvider>
      <StatusBar 
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </AuthProvider>  
  );
}

