import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import TasksNavigator from './list';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TasksNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator; 