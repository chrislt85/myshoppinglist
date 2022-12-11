import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Tasks } from '../screens';

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerStyle: {
          //backgroundColor: '',
        },
        //headerTintColor: COLORS.text,
        headerTitleStyle: {
          //fontFamily: 'Lato-Bold',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TasksNavigator; 