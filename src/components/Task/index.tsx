import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from "phosphor-react-native";
import { useState } from "react";
import { theme } from "../../styles/defaultTheme";
import { TaskProps } from "../../screens/Home";

type TaskCardProps = {
  task: TaskProps
  onDeleteTask: (taskId:string)=>void
  onChangeTask: (changeTask:TaskProps)=>void
}

export function Task({task, onDeleteTask, onChangeTask}:TaskCardProps){
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckedBox(){
    setIsChecked(!isChecked)

    onChangeTask(task)
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={handleCheckedBox}
        activeOpacity={0.6}
        style={{marginHorizontal: 3.5}}
      >
        {
          isChecked ?
            <View style={styles.checked}>
              <Check size={14} color={theme.colors["gray-100"]}/>
            </View>
          :
            <View style={styles.unchecked}/>
        }
      </TouchableOpacity>
      <Text style={[styles.name, isChecked && styles.checkedName]}>
        {task.name}
      </Text>
      <TouchableOpacity style={styles.buttonRemove} onPress={()=>onDeleteTask(task.id)}>
        <Trash size={20} color={theme.colors["gray-300"]}/>
      </TouchableOpacity>
    </View>
  )
}