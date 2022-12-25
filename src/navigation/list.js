import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Tasks, EditTask } from '../screens';

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        presentation: 'card',
        headerTitleAlign: 'center',
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{
          title: 'Edit Item'
        }}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigator; 