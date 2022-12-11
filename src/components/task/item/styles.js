import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItemContainer:{
        paddingVertical: 12,
        backgroundColor: '#435058',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemContainerDone:{
        paddingVertical: 12,
        backgroundColor: '#968E85',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        paddingHorizontal: 10,
    },
    checkBoxStatus:{
        fontSize: 30,
        color: '#ffffff',
    }
})