import { StatusBar } from "react-native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Home } from "@screens/home";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_700Bold, NunitoSans_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
