import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles';

const TaskItem = ({item, onHandleSelected}) => {
    return (
            <TouchableOpacity style={styles.listItemContainer} onPress={() => onHandleSelected(item)}>
                <TouchableOpacity style={styles.checkBox} onPress={() => null} >
                    <Text style={styles.checkBoxStatus}>☐☑</Text>
                </TouchableOpacity>
                <Text style={styles.listItem}>{item.value}</Text>
            </TouchableOpacity>
    )
}

export default TaskItem;