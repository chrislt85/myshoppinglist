import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { AddItem, TaskList, TaskItem, ModalDeleteItem } from './components/index';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    if (task.trim().length > 0)
    {
      setTaskList((prevTaskList) => [...prevTaskList, { id: Math.random().toString(), value: task, done: false }]);
      setTask('');
    }
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }
  
  const onHandleCheckStatus = (item) => {
  //const onHandleCheckStatus = (item) => {
      // busco el item en la lista de items
      //item.done = !item.done;
    //};
    //setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))

    
    //a = a.map(function(item) { return item == 3452 ? 1010 : item; });

    setTaskList((prevTaskList) => prevTaskList.map((currItem) => ({ id: currItem.id, value: currItem.value, done: ((currItem.id === item.id) ? !currItem.done : currItem.done) })));
  }

  const renderItem = ({item}) => (
      <TaskItem item={item} onHandleSelected={onHandleSelected} onHandleCheckStatus={onHandleCheckStatus} />
  )
  
  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
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
      <TaskList taskList={taskList} renderItem={renderItem} />
      <ModalDeleteItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleDeleteItem={onHandleDeleteItem} onHandleCancel={onHandleCancel} />
    </View>
  );
}

