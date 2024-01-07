import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native'
import { styles } from './styles'

type DropdownDataItemProps = {
    label: string,
    value: string
}

type DropdownProps = {
    placeholer: string,
    value: DropdownDataItemProps,
    data: Array<DropdownDataItemProps>,
    onSelect: (value: DropdownDataItemProps) => void
}

const Dropdown: FC<DropdownProps> = (props) => {

    const [modalShow, setModalShow] = useState(false)

    const handleSelectItem = (item: DropdownDataItemProps) => {
        setModalShow(false)
        props.onSelect(item)
    }

    const handleButtonClick = () => {
        setModalShow(true)
    }

    const RenderListItem = ({ item }: { item: DropdownDataItemProps }) => {
        return (
            <TouchableOpacity onPress={() => handleSelectItem(item)} style={styles.listItem}>
                <Text style={styles.listItemLabel}>{item.label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                <Text style={[styles.buttonTitle, !!props.value?.label === false && { color: '#646464' }]}>
                    {props.value?.label ? props.value?.label : props?.placeholer}
                </Text>
            </TouchableOpacity>
            <Modal visible={modalShow} animationType='slide'>
                <SafeAreaView style={{ flex: 1 }}>
                    <Text style={styles.modalTitle}>{props.placeholer}</Text>
                    <FlatList style={{ flex: 1, }} data={props.data || []} renderItem={RenderListItem} />
                </SafeAreaView>
            </Modal>
        </>
    )
}

export default Dropdown