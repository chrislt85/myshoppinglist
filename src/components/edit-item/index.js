import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const EditItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            value={task}
            placeholder="Enter new item description"
            onChangeText={onHandleChange}
            />
            <Button disabled={!task} title='Edit' color='#435058' onPress={onHandleTask} />
        </View>
    )
}

export default EditItem;