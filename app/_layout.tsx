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
          <Stack.Screen name="wordsearchpuzzle" options={{ headerShown: false }} />
          <Stack.Screen name="quakeprepare1" options={{ headerShown: false }} />
          <Stack.Screen name="quakeprepare2" options={{ headerShown: false }} />
          <Stack.Screen name="quakeprepare3" options={{ headerShown: false }} />
          <Stack.Screen name="scalar" options={{ headerShown: false }} />
          <Stack.Screen name="scalar2" options={{ headerShown: false }} />
          <Stack.Screen name="scalar3" options={{ headerShown: false }} />
          <Stack.Screen name="scalar4" options={{ headerShown: false }} />
          <Stack.Screen name="scalar5" options={{ headerShown: false }} />
 
          <Stack.Screen name="typesofforce1" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce2" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce3" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce4" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce5" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce6" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce7" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce8" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce9" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforce10" options={{ headerShown: false }} />
          <Stack.Screen name="typesofforcescore" options={{ headerShown: false }} />

          <Stack.Screen name="picsword1" options={{ headerShown: false }} />
          <Stack.Screen name="picsword2" options={{ headerShown: false }} />
          <Stack.Screen name="picsword3" options={{ headerShown: false }} />
          <Stack.Screen name="picswordscore" options={{ headerShown: false }} />

          <Stack.Screen name="readingscalar" options={{ headerShown: false }} />

          <Stack.Screen name="plantmultiplechoice1" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice2" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice3" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice4" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice5" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice6" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice7" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice8" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice9" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice10" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice11" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice12" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice13" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice14" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoice15" options={{ headerShown: false }} />
          <Stack.Screen name="plantmultiplechoicescore" options={{ headerShown: false }} />

          <Stack.Screen name="chemmultiple1" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple2" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple3" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple4" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple5" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple6" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple7" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple8" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple9" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiple10" options={{ headerShown: false }} />
          <Stack.Screen name="chemmultiplescore" options={{ headerShown: false }} />

          <Stack.Screen name="theorganelles1" options={{ headerShown: false }} />
          <Stack.Screen name="theorganelles2" options={{ headerShown: false }} />
          <Stack.Screen name="theorganelles3" options={{ headerShown: false }} />
          <Stack.Screen name="theorganelles4" options={{ headerShown: false }} />
          <Stack.Screen name="theorganelles5" options={{ headerShown: false }} />
          <Stack.Screen name="theorganellesscore" options={{ headerShown: false }} />
          <Stack.Screen name="scalarscore" options={{ headerShown: false }} />

          <Stack.Screen name="mattermatch1" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch2" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch3" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch4" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch5" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch6" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch7" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch8" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch9" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch10" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch11" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch12" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch13" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch14" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch15" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch16" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch17" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch18" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch19" options={{ headerShown: false }} />
          <Stack.Screen name="mattermatch20" options={{ headerShown: false }} />

          <Stack.Screen name="mattermatchscore" options={{ headerShown: false }} />



          <Stack.Screen name="earthscienceprogress" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
