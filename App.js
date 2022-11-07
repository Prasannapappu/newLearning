import React, {useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import Header from './componantes/Header';
import AddInputs from './componantes/AddInputs';
import Todolist from './componantes/Todolist';

function App() {
  const [todos, setTodos] = useState([
    {msg: 'going to be software engineer', key: 1},
    {msg: 'complete my masters in australia', key: 2},
    {msg: 'start new career in australia', key: 3},
    {msg: 'world number one richest man', key: 4},
    {msg: 'want to travel around the world', key: 5},
  ]);
  const deleteHandler = key => {
    setTodos(todos.filter(todo => todo.key !== key));
  };
  const submitHandler = text => {
    setTodos(prevTodos => {
      return [{msg: text, key: Math.random().toString()}, ...prevTodos];
    });
  };
  return (
    <View style={styles.main}>
      <View>
        <Header />
      </View>
      <View style={styles.body}>
        <View>
          <AddInputs submitHandler={submitHandler} />
        </View>
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Todolist item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#BAD1C2',
  },
  body: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
});
