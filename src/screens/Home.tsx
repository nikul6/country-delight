import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import category from '../data/category.json';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#EEF5F5' }}>
            <Banner img={require('../../assets/Banner1.jpeg')}/>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Shop by Category</Text>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.categoryContainer}>
                        {category.map((category) => (
                            <View key={category.id} style={styles.categoryItem}>
                                <Image
                                    source={{ uri: category.image }}
                                    style={{ height: 80, width: 80, backgroundColor: '#fff', borderRadius: 80 / 2 }}
                                />
                                <Text style={{ textAlign: 'center' }}>{category.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <Banner img={require('../../assets/Banner5.png')}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryItem: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 5,
    },
})