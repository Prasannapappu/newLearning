import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Text,
} from 'react-native';

const AddInputs = ({submitHandler}) => {
  const [newGoal, setnewGoal] = useState('');

  const changeHandler = val => {
    setnewGoal(val);
  };
  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder="Enter you New Goals"
        placeholderTextColor="#153462"
        onChangeText={changeHandler}
      />
      <TouchableHighlight
        style={styles.addBtn}
        onPress={() => submitHandler(newGoal)}>
        <Text style={styles.btnText}>Add your Goals</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddInputs;

const styles = StyleSheet.create({
  inputText: {
    marginBottom: 20,
    height: 50,
    backgroundColor: '#F6F6C9',
    opacity: 0.5,
    borderBottomColor: '#4FA095',
    borderBottomWidth: 2,
    color: '#4FA095',
    fontSize: 20,
  },
  addBtn: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#153462',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});
