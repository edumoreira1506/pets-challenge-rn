import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';

const TodoForm = ({
  name,
  animal,
  age,
  onAdd
}) => (
  <View>
    <Text>Name</Text>
    <TextInput
      onChangeText={name.onChange}
      value={name.value}
      editable
      style={{ height: 40 }}
    />
    <Text>Animal</Text>
    <TextInput
      onChangeText={animal.onChange}
      value={animal.value}
      editable
      style={{ height: 40 }}
    />
    <Text>Age</Text>
    <TextInput
      onChangeText={age.onChange}
      value={age.value}
      editable
      style={{ height: 40 }}
    />
    <Button
      title="Add"
      onPress={onAdd}
    />
  </View>
);

export default TodoForm;