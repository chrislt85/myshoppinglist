import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { EditItem, ImageSelector, AddItem, TaskList, TaskItem, ModalDeleteItem } from '../../components';
import { editTask, selectTask, addTask, deleteTask, checkStatus } from '../../store/actions';
import { styles } from './styles';

const EditTask = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const selectedTask = useSelector((state) => state.tasks.selectedTask);

    const [task, setTask] = useState('');
    const [imageTask, setImageTask] = useState(null);
  
    useEffect(() => {
      //dispatch(filterProducts(category.id));
      //console.warn('selectedTask', selectedTask);
      setTask(selectedTask?.value);
      setImageTask(selectedTask?.imageurl);
      //console.warn('imageTask', imageTask);
    }, []);

    const onHandleEditTask = () => {
      if (task.trim().length > 0)
      {
        console.warn('OLD imageTask', selectedTask?.imageurl);
        console.warn('NEW imageTask', imageTask);
        dispatch(editTask({ id: selectedTask.id, value: task, done: selectedTask.done, imageurl: imageTask }));
        //setTask('');
        //setImageTask(null);
        navigation.navigate('Tasks');
      }
    }

    const onImageSelection = (uri) => {
      setImageTask(uri);
      console.warn("uri", uri);
    }

    const onHandleChange = (text) => setTask(text);
    
    return (
        <View style={styles.container}>
            <EditItem task={task} onHandleTask={onHandleEditTask} onHandleChange={onHandleChange} />
            <ImageSelector imageTask={imageTask} onImageSelection={onImageSelection} />
        </View>
  );
};

export default EditTask; 