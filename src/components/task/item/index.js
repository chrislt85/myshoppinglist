import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles';

const TaskItem = ({item, onHandleSelected, onHandleDelete, onHandleCheckStatus}) => {
       
    return (
        <TouchableOpacity style={item.done ? styles.listItemContainerDone : styles.listItemContainer} onPress={() => onHandleSelected(item)}>
            <TouchableOpacity style={styles.checkBox} onPress={() => onHandleCheckStatus(item)} >
                <Text style={styles.checkBoxStatus}>{item.done ? '☑' : '☐'}</Text>
            </TouchableOpacity>
            <Text style={item.done ? styles.listItemDone : styles.listItem}>{item.value}</Text>
            <TouchableOpacity style={styles.deleteItem} onPress={() => onHandleDelete(item)}>
                <Ionicons name="trash" size={24} color="#FFFFFF" />
            </TouchableOpacity> 
        </TouchableOpacity>
    )
} 

export default TaskItem;