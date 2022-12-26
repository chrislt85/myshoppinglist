import React from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Image, Text, Alert, Button } from 'react-native';
import { styles } from './styles';

const ImageSelector = ({ imageTask, onImageSelection }) => {

    const onHandleTakePicture = async () => {
        const hasCameraPermissions = await verifyPermissions();
        if (!hasCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        });

        onImageSelection(image.uri);// esto es para que la vista "se entere" de la URL de la imagen seleccionada
    };

    const onHandleDeletePicture = () => {
        onImageSelection(null);
    };

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted"){
            Alert.alert("Insufficient permissions", "You need to give permissions to use the camera", [{ text: "Ok" }]);

            return false;
        }

        return true;
    };

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!imageTask ? (
                    <Text style={styles.title}>No image selected</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: imageTask }} />
                )}
            </View>
            <View style={styles.buttons}>
                <Button
                    title="Take picture"
                    color="#808080"
                    onPress={onHandleTakePicture}
                />
                <Button
                    disabled={!imageTask}
                    title="Clear picture"
                    color="#808080"
                    onPress={onHandleDeletePicture}
                />
            </View>
            
        </View>
    );
}

export default ImageSelector;