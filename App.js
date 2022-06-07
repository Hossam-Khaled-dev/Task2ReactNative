import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddItem from './components/add-item';
import { useState } from 'react';
import TodoList from './components/todo-list';
import uuid from 'react-native-uuid';
export default function App() {
  const [list,setList]=useState([
    {id:uuid.v4(),title:"task1",done:false,delete:false},
    {id:uuid.v4(),title:"task2",done:true,delete:false},
    {id:uuid.v4(),title:"task3",done:false,delete:false}
  ]);
  const handleAddTodo=(todo)=>{
    setList([...list,todo])
  }
  const handlecheckedTodo=(todo)=>{
    setList(list=>list.map(item=>item.id===todo.id?{...item,done:true}:item));
  }
  const handledeletedTodo=(todo)=>{
    const updatedlist= [...list].filter(item => item.id !== todo.id);
        setList(updatedlist);
  }
  return (
    <View style={styles.container}>
      <Header title={"ToDo List"}></Header>
      <AddItem onTodoAdd={handleAddTodo}></AddItem>
      <TodoList todos={list} onTodochecked={handlecheckedTodo} onTodoDeleted={handledeletedTodo}/>
      <StatusBar hidden />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   height:'70%',
   backgroundColor:'#F2C06D',
  },
});
