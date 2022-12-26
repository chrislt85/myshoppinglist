import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { EditItem, ImageSelector } from '../../components';
import { editTask } from '../../store/actions';
import { styles } from './styles';

const EditTask = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const selectedTask = useSelector((state) => state.tasks.selectedTask);

    const [task, setTask] = useState('');
    const [imageTask, setImageTask] = useState(null);
  
    useEffect(() => {
      setTask(selectedTask?.value);
      setImageTask(selectedTask?.imageurl);
    }, []);

    const onHandleEditTask = () => {
      if (task.trim().length > 0)
      {
        dispatch(editTask({ id: selectedTask.id, value: task, done: selectedTask.done, imageurl: imageTask }));
        navigation.navigate('Tasks');
      }
    }

    const onImageSelection = (uri) => {
      setImageTask(uri);
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