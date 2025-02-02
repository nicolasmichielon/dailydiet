import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Home } from "@screens/home";
import { Loading } from "@components/Loading";
import { NewMeal } from "@screens/newMeal";
import { Routes } from "src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_700Bold, NunitoSans_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
