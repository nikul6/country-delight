import { Image, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.headerContiner}>
            <View style={styles.vipContainer}>
                <Image
                    source={require('../../assets/VIP.png')}
                    style={styles.vipImg}
                />
                <View style={{ marginLeft: 5 }}>
                    <Text style={styles.morningText}>Morning Delivery</Text>
                    <Text style={styles.timeText}>5am to 7:30am</Text>
                </View>
            </View>
            <View style={styles.walletContainer}>
                <FontAwesome5 name="wallet" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 0
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
        color: 'gray',
        fontSize: 14
    },
    vipImg: {
        height: 50,
        width: 50
    },
    walletContainer: {
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray'
    }
})