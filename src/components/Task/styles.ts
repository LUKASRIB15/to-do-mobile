import { StyleSheet } from "react-native";
import { theme } from "../../styles/defaultTheme";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors["gray-500"],

    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    marginBottom:8,

    borderRadius: 8,
    borderColor: theme.colors["gray-400"],
    borderStyle: "solid",
    borderWidth: 1,

    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  checked:{
    backgroundColor: theme.colors["purple-500"],
    borderRadius: 999,
    width: 17,
    height: 17,
    alignItems: "center",
    justifyContent: "center"
  },
  unchecked:{
    width: 17,
    height: 17,

    borderRadius: 999,
    borderColor: theme.colors["blue-300"],
    borderStyle: "solid",
    borderWidth: 2,
  },
  name:{
    flex: 1,
    fontFamily: theme.inter.regular,
    lineHeight: 18,
    color: theme.colors["gray-100"]
  },
  checkedName: {
    textDecorationLine: "line-through", 
    color: theme.colors["gray-300"]
  },
  buttonRemove:{
    width: 24,
    height: 24,

    alignItems: "center",
    justifyContent: "center"
  }
})