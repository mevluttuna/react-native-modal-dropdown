import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    button: {
        width: width * 0.9,
        height: width * 0.15,
        backgroundColor: '#DDD',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 15
    },
    buttonTitle: {
        fontSize: width * 0.035,
        fontWeight: '400',
        color: '#000',
    },
    listItem: {
        width: '100%',
        height: width * 0.15,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },
    listItemLabel: {
        fontSize: width * 0.035,
        fontWeight: '400',
        color: '#000',
        paddingLeft: 15
    },
    modalTitle: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 20
    }
})