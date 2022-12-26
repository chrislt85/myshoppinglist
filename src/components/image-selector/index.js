import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Image, Text, Alert, Button } from 'react-native';
import { styles } from './styles';

const ImageSelector = ({ imageTask, onImageSelection/*, defaultImageTask*/ }) => {
    //const [selectedImage, setSelectedImage] = useState(null);

    //rconsole.warn('image', imageTask);
    /*useEffect(() => {
        if (imageTask)
        {
            setSelectedImage(imageTask);
            console.warn('imageTask', imageTask);
        }
        //onImageSelection(imageTask);
    //    setSelectedImage(defaultImageTask);
        //console.warn('selectedImage', selectedImage);
    }, []);*/

    const onHandleTakePicture = async () => {
        const hasCameraPermissions = await verifyPermissions();
        if (!hasCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        });

        //setSelectedImage(image.uri);
        onImageSelection(image.uri);// esto es para que la vista "se entere" de la URL de la imagen seleccionada
    };

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted"){
            Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara", [{ text: "Ok" }]);

            return false;
        }

        return true;
    };

    return (
        <View style={styles.container}>
            {/*<View style={styles.preview}>
                {!selectedImage ? (
                    <Text style={styles.title}>No hay una imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: selectedImage }} />
                )}
            </View>*/}
            <View style={styles.preview}>
                {!imageTask ? (
                    <Text style={styles.title}>No hay una imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: imageTask }} />
                )}
            </View>
            <Button
                title="Tomar foto"
                color="#808080"
                onPress={onHandleTakePicture}
             />
        </View>
    );
}

export default ImageSelector;