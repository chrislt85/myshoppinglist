import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles';

const TaskItem = ({item, onHandleSelected, onHandleCheckStatus}) => {
       
    return (
            <TouchableOpacity style={item.done ? styles.listItemContainerDone : styles.listItemContainer} onPress={() => onHandleSelected(item)}>
                <TouchableOpacity style={styles.checkBox} onPress={() => onHandleCheckStatus(item)} >
                    <Text style={styles.checkBoxStatus}>{item.done ? '☑' : '☐'}</Text>
                </TouchableOpacity>
                <Text style={item.done ? styles.listItemDone : styles.listItem}>{item.value}</Text>
            </TouchableOpacity>
    )
} 

export default TaskItem;