import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItemContainer:{
        paddingVertical: 20,
        backgroundColor: '#9A848F',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        /*justifyContent: 'center',*/
        marginVertical: 5,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemContainerDone:{
        paddingVertical: 20,
        backgroundColor: 'gray',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        /*justifyContent: 'center',*/
        marginVertical: 5,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItem:{
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
        width: '90%',
        textAlignVertical: 'center',
        
        /*borderColor: 'red',
        borderWidth: 1,*/
    },
    listItemDone:{
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,
        width: '90%',
        textAlignVertical: 'center',
        textDecorationLine: 'line-through'
    },
    checkBox:{
        /*borderColor: 'blue',
        borderWidth: 1,*/
    },
    checkBoxStatus:{
        fontSize: 30,
        color: '#ffffff',
        paddingHorizontal: 10,
    }
})