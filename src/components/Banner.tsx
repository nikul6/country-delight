import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type Props = {
    img: ImageSourcePropType;
}

export default function Banner({ img }: Props) {
    return (
        <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={img}
                style={{ height: 250, width: 400, borderRadius: 10, resizeMode: 'stretch' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})