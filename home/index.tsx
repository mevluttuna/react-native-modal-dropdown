import React, { useState } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native-animatable'
import { styles } from './styles'
import Dropdown from '../../components/dropdown'

const mockData = [{
    label: 'Item 1',
    value: 'Item 1'
},
{
    label: 'Item 2',
    value: 'Item 2'
},
{
    label: 'Item 3',
    value: 'Item 3'
},
{
    label: 'Item 4',
    value: 'Item 4'
},
{
    label: 'Item 5',
    value: 'Item 5'
}
]

const Home = () => {
    const [selectedItem, setSelectedItem] = useState({ label: '', value: '' })

    const handleSelectItem = (item: any) => {
        console.log(item)

        setSelectedItem(item)
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Dropdown placeholer='Bir Item Seçiniz' value={selectedItem} data={mockData} onSelect={handleSelectItem} />
        </SafeAreaView>
    )
}

export default Home