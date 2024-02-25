import { StyleSheet } from "react-native";
import { theme } from "../../styles/defaultTheme";

export const styles = StyleSheet.create({
  container:{
    borderColor: theme.colors["gray-400"],
    borderStyle: "solid",
    borderTopWidth: 1,

    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    
    paddingVertical: 48,
  },
  description:{
    fontFamily: theme.inter.regular,
    color: theme.colors["gray-300"],
    textAlign: "center"
  },
  descriptionBold:{
    fontFamily: theme.inter.bold
  }
})