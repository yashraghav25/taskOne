import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
export default function Layout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
      const loadFont = async () => {
        await Font.loadAsync({
          'Manrope-Bold': require('../assets/fonts/Manrope-Bold.ttf'),
          'GeneralSans-Variable': require('../assets/fonts/GeneralSans-Variable.ttf'),
        });
        setFontsLoaded(true);
      };
      loadFont();
    }, []);
  
    if (!fontsLoaded) return null;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> 
      <Stack.Screen name="final" /> 
    </Stack>
  );
}
