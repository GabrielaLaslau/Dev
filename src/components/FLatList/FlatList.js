import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

export default function FlatList() {

    const pages = [
        {
            id: 1,
            name: 'SignIn'
        },
        {
            id: 2,
            name: 'SignUp'
        },
    ]

   // const onePage = ({ item }) => (
      ///
 //);

    return (
        <SafeAreaView>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.contentContainerStyle}
                data={pages}
                renderItem={onePage}
            />
        </SafeAreaView>
    );
}