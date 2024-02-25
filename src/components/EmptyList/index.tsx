import { Text, View } from "react-native";

import { styles } from "./styles";
import Clipboard from "../../assets/clipboard.svg"
export function EmptyList(){
  return (
    // Componente que será exibido quando a lista de tarefas estiver vazia
    <View style={styles.container}>
      <Clipboard />
      <Text style={styles.description}>
        <Text style={styles.descriptionBold}>Você ainda não tem tarefas cadastradas</Text>{"\n"} 
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}