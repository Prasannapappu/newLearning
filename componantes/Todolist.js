import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Todolist = ({item, deleteHandler}) => {
  return (
    <TouchableOpacity
      onPress={() => deleteHandler(item.key)}
      style={styles.goalList}>
      <Text style={styles.goalText}>{item.msg}</Text>
    </TouchableOpacity>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  goalList: {
    marginVertical: 15,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6C9',
    borderRadius: 25,
    borderColor: '#4FA095',
    borderWidth: 2,
    borderStyle: 'dotted',
  },
  goalText: {
    color: '#4FA095',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
