import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            value={task}
            placeholder="Enter new item"
            onChangeText={onHandleChange}
            />
            <Button disabled={!task} title='Add' color='#435058' onPress={onHandleTask} />
        </View>
    )
}

export default AddItem;