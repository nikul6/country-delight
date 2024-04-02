import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import category from '../data/category.json';

export default function Products() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {category.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Image
              source={{ uri: category.image }}
              style={{ height: 80, width: 80, backgroundColor: '#fff', borderRadius: 80 / 2 }}
            />
            <Text style={{ textAlign: 'center', color: 'gray' }} numberOfLines={1}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryItem: {
    width: '23%',
    alignItems: 'center',
    padding: 2,
    borderRightWidth: 2,
    borderRightColor: '#F0F5F3'
  },
})