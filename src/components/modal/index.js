import React from "react";
import { Text, View, Button, Modal } from 'react-native';
import { styles } from './styles';

const ModalDeleteItem = ({modalVisible, selectedTask, onHandleDeleteItem, onHandleCancel}) => {
    return (
        <Modal visible={modalVisible} animationType='fade'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Item Detail</Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
              <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button 
                title='Delete'
                color='#5E4B56'
                onPress={onHandleDeleteItem}
              />
              <Button 
                title='Cancel'
                color='#968E85'
                onPress={onHandleCancel}
              />
            </View>  
          </View>
        </Modal>
    )
}

export default ModalDeleteItem;