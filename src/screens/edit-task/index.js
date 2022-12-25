import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { EditItem, AddItem, TaskList, TaskItem, ModalDeleteItem } from '../../components';
import { editTask, selectTask, addTask, deleteTask, checkStatus } from '../../store/actions';
import { styles } from './styles';

const EditTask = ({ navigation, route }) => {
    const dispatch = useDispatch();
    //const tasks = useSelector((state) => state.tasks.taskList);
    const selectedTask = useSelector((state) => state.tasks.selectedTask);

    const [task, setTask] = useState('');
    //const [modalVisible, setModalVisible] = useState(false);
  
    useEffect(() => {
      //dispatch(filterProducts(category.id));
      setTask(selectedTask?.value);
    }, []);

    const onHandleEditTask = () => {
      if (task.trim().length > 0)
      {
        dispatch(editTask({ id: selectedTask.id, value: task, done: selectedTask.done }));
        setTask('');
        navigation.navigate('Tasks');
      }
    }
  /*
    const onHandleSelected = (item) => {
      dispatch(selectTask(item.id));
      //setModalVisible(!modalVisible);
      
    }

    const onHandleDelete = (item) => {
      dispatch(selectTask(item.id));
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
  */
    const onHandleChange = (text) => setTask(text);
    
    return (
        <View style={styles.container}>
            {/*<AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Shopping List</Text>
            </View>
            <TaskList taskList={tasks} renderItem={renderItem} />
            <ModalDeleteItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleDeleteItem={onHandleDeleteItem} onHandleCancel={onHandleCancel} />
            */}
            <EditItem task={task} onHandleTask={onHandleEditTask} onHandleChange={onHandleChange} />
        </View>
  );
};

export default EditTask; 