import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName="index">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Choose" options={{ headerShown: false }} />
          <Stack.Screen name="achievements" options={{ headerShown: false }} />
          <Stack.Screen name="chemistry" options={{ headerShown: false }} />
          <Stack.Screen name="physics" options={{ headerShown: false }} />
          <Stack.Screen name="earthsci" options={{ headerShown: false }} />
          <Stack.Screen name="biology" options={{ headerShown: false }} />
          <Stack.Screen name="puzzlefirst" options={{ headerShown: false }} />
          <Stack.Screen name="puzzlesecond" options={{ headerShown: false }} />
          <Stack.Screen name="puzzlethird" options={{ headerShown: false }} />
          <Stack.Screen name="puzzlefourth" options={{ headerShown: false }} />
          <Stack.Screen name="puzzlefifth" options={{ headerShown: false }} />
          <Stack.Screen name="geopuzzlescore" options={{ headerShown: false }} />
          <Stack.Screen name="geolayer" options={{ headerShown: false }} />
          <Stack.Screen name="geolayerscore" options={{ headerShown: false }} />
          <Stack.Screen name="earthscienceprogress" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
