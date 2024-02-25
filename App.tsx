import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import {
  Inter_700Bold,
  Inter_400Regular,
  useFonts
} from "@expo-google-fonts/inter"

import { Home } from "./src/screens/Home";
import { theme } from "./src/styles/defaultTheme";

export default function App() {
  const [hasFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Se as fontes forem carregadas, renderiza a tela de Home */}
      {
        hasFontsLoaded ?
          <Home />
        :
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      }
      <StatusBar 
        barStyle={"light-content"} 
        backgroundColor={"transparent"}
        translucent
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: theme.colors["gray-600"],
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})