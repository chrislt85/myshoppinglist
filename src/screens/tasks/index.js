import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { AddItem, TaskList, TaskItem, ModalDeleteItem } from '../../components';
import { selectTask, addTask, deleteTask, checkStatus } from '../../store/actions';
import { styles } from './styles';

const Tasks = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.taskList);
    const selectedTask = useSelector((state) => state.tasks.selectedTask);

    const [task, setTask] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
  
    const onHandleTask = () => {
      if (task.trim().length > 0)
      {
        dispatch(addTask({ id: Math.random().toString(), value: task, done: false, imageurl: null }));
        setTask('');
      }
    }
  
    const onHandleSelected = (item) => {
      dispatch(selectTask(item.id));// selecciono el item a editar
      navigation.navigate('EditTask');
    }

    const onHandleDelete = (item) => {
      dispatch(selectTask(item.id));// selecciono el item a eliminar
      setModalVisible(!modalVisible);
    }
    
    const onHandleCheckStatus = (item) => {
      dispatch(checkStatus(item.id));
    }
  
    const renderItem = ({item}) => (
        <TaskItem item={item} onHandleSelected={onHandleSelected} onHandleDelete={onHandleDelete} onHandleCheckStatus={onHandleCheckStatus} />
    )
    
    const onHandleDeleteItem = () => {
      dispatch(deleteTask(selectedTask.id));
      setModalVisible(!modalVisible);
    }
    
    const onHandleCancel = () => {
      setModalVisible(!modalVisible);
    }
  
    const onHandleChange = (text) => setTask(text);
  
    return (
        <View style={styles.container}>
            <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Shopping List</Text>
            </View>
            <TaskList taskList={tasks} renderItem={renderItem} />
            <ModalDeleteItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleDeleteItem={onHandleDeleteItem} onHandleCancel={onHandleCancel} />
        </View>
  );
};

export default Tasks; 