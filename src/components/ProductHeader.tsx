import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, "Products">;

interface ProductHeaderProps {
    navigation: ProductScreenProps["navigation"];
}

export default function ProductHeader({ navigation }: ProductHeaderProps) {
    const tomorrow = moment().add(1, 'day');
    const formattedDate = tomorrow.format('ddd, Do MMMM');
    return (
        <View style={styles.headerContiner}>
            <View style={styles.vipContainer}>
                <AntDesign name="arrowleft" size={24} color="black"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.morningText}>Morning Delivery</Text>
                    <Text style={styles.timeText}>Deliver on <Text style={{ color: '#000' }}>{formattedDate}</Text></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContiner: {
        justifyContent: 'center',
        // marginHorizontal: 5,
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#F0F5F3'
    },
    vipContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    morningText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    timeText: {
        marginTop: 2,
        color: 'gray',
        fontSize: 14
    },
})