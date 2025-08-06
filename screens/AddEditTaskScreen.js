import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddEditTaskScreen({ route, navigation }) {
  const [title, setTitle] = useState(route.params?.title || '');
  const [description, setDescription] = useState(route.params?.description || '');
  const [dueDate, setDueDate] = useState(route.params?.dueDate || '');
  const [status, setStatus] = useState(route.params?.status || 'open');

  const handleSubmit = () => {
    const task = { title, description, dueDate, status };
    route.params?.onSubmit(task);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Due Date" value={dueDate} onChangeText={setDueDate} style={styles.input} />
      <Button title="Save Task" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});