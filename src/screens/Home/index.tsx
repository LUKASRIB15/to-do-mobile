import "react-native-get-random-values"

import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import {PlusCircle} from "phosphor-react-native"
import { useState } from "react";
import {v4 as uuid} from "uuid"

import { theme } from "../../styles/defaultTheme";
import { styles } from "./styles";
import Logo from "../../assets/logo.svg"
import { EmptyList } from "../../components/EmptyList";
import { Task } from "../../components/Task";

export type TaskProps = {
  id: string
  name: string
  checked: boolean 
}
export function Home(){
  const [focused, setFocused] = useState(false)
  const [taskName, setTaskName] = useState("")
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function onChangeCheckedValue(changeTask: TaskProps){
    const changeCheckedTask = tasks.find(task=>task===changeTask)

    setTasks(prevState=>{
      return prevState.map(task=>{
        if(task === changeCheckedTask){
          return {...task, checked: !task.checked}
        }
        return task
      })
    })
  }

  function handleCreateTask(){
    setTasks(prevState=>[...prevState, {
      id: uuid(),
      name: taskName,
      checked: false
    }])
    setTaskName("")
  }

  function handleDeleteTask(taskId:string){
    const filteredTasksList = tasks.filter(task=>task.id !== taskId)
    setTasks(filteredTasksList)
  }


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Logo />
      </View>

      {/* Formulário de nova tarefa */}
      <View style={{marginHorizontal: 24}}>
        <View style={styles.form}>
          <TextInput 
            style={[styles.formInput, focused && styles.formInputInFocus]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors["gray-300"]}
            cursorColor={theme.colors["gray-100"]}
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            value={taskName}
            onChangeText={(text)=>setTaskName(text)}
          />
          <TouchableOpacity 
            style={[styles.formButton, taskName.trim() === "" && {opacity: 0.7}]}
            activeOpacity={0.6}
            onPress={handleCreateTask}
          >
            <PlusCircle color={theme.colors["gray-100"]}/>
          </TouchableOpacity>
        </View>

        {/* Informações de tarefas criadas e concluídas */}
        <View style={styles.containerInfos}> 
          <View style={styles.info}>
            <Text style={[styles.infoText, {color: theme.colors["blue-300"]}]}>Criadas</Text>
            <View style={styles.containerInfoQuantity}>
              <Text style={styles.infoQuantity}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={[styles.infoText, {color: theme.colors["purple-300"]}]}>Concluídas</Text>
            <View style={styles.containerInfoQuantity}>
              <Text style={styles.infoQuantity}>
                {tasks.filter(task=>task.checked).length}
              </Text>
            </View>
          </View>
        </View>

        
      </View>
      {/* Listagem de tarefas */}
      <FlatList 
          data={tasks}
          keyExtractor={item=>item.id}
          renderItem={({item})=><Task task={item} onDeleteTask={handleDeleteTask} onChangeTask={onChangeCheckedValue}/>}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList/>}
          style={{marginHorizontal: 24}}
        />
    </View>
  )
}