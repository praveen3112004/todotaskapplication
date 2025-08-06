import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, RefreshControl } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import { getTasks, deleteTask, updateTask, addTask } from '../services/taskService';

export default function TaskListScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTasks = async () => {
    if (user) {
      const result = await getTasks(user.uid);
      setTasks(result);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTasks();
    setRefreshing(false);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(user.uid, taskId);
    fetchTasks();
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Logout" onPress={logout} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EditTask', {
                ...item,
                onSubmit: async (updatedTask) => {
                  await updateTask(user.uid, item.id, updatedTask);
                  fetchTasks();
                },
              })
            }
            onLongPress={() => handleDelete(item.id)}
          >
            <View style={{ padding: 16, borderBottomWidth: 1 }}>
              <Text>{item.title}</Text>
              <Text>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 30, right: 30, backgroundColor: '#2196f3', borderRadius: 50, padding: 16 }}
        onPress={() =>
          navigation.navigate('EditTask', {
            onSubmit: async (newTask) => {
              await addTask(user.uid, newTask);
              fetchTasks();
            },
          })
        }
      >
        <Text style={{ color: '#fff' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}