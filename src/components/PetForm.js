import React from 'react';
import { View, Button, TextInput } from 'react-native';

const TodoForm = ({
  name,
  animal,
  age,
  onAdd
}) => (
  <View>
    <TextInput
      onChangeText={name.onChange}
      value={name.value}
      editable
      style={{ height: 40 }}
    />
    <TextInput
      onChangeText={animal.onChange}
      value={animal.value}
      editable
      style={{ height: 40 }}
    />
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