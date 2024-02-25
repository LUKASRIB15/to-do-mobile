import { StyleSheet } from "react-native";
import { theme } from "../../styles/defaultTheme";

export const styles = StyleSheet.create({
  // View geral
  container: {
    backgroundColor: theme.colors["gray-600"],
    flex: 1
  },

  // Header da aplicação com a logo
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 173,
    backgroundColor: theme.colors["gray-700"]
  },

  // Formulário de adicionar uma nova tarefa
  form:{
    flexDirection: "row",
    gap: 4,
    marginTop: -31
  },
  formInput:{
    backgroundColor: theme.colors["gray-500"],
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: theme.colors["gray-100"],
    fontFamily: theme.inter.regular,

    borderStyle: "solid",
    borderColor: theme.colors["gray-700"],
    borderWidth: 1,

    flex: 1
  },
  formInputInFocus:{
    borderStyle: "solid",
    borderColor: theme.colors["purple-500"],
    borderWidth: 1,
  },
  formButton:{
    backgroundColor: theme.colors["blue-500"],
    borderRadius: 6,
    padding:18,
    alignItems: "center",
    justifyContent: "center"
  },

  // View Infos (Criadas e Concluídas)
  containerInfos:{
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  info:{
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  infoText:{
    fontFamily: theme.inter.bold
  },
  containerInfoQuantity:{
    backgroundColor: theme.colors["gray-400"],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999
  },
  infoQuantity:{
    fontFamily:  theme.inter.bold,
    fontSize: 12,
    color: theme.colors["gray-200"]
  }
})