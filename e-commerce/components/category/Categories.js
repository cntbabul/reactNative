import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../../data/CategoriesData'
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

import { useNavigation } from '@react-navigation/native';

// console.log({categoriesData});
export default function Categories() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.category} > 
      {categoriesData.map((category) => (
        <View key={category._id}>
          <TouchableOpacity style={styles.categoryIconName}
          onPress={()=> navigation.navigate(category.path)}
          
          
          >
            <FontAwesome name={category.icon} size={20} color="#900" />
            <Text>{category.name}</Text>
          </TouchableOpacity>

        </View>
      ))}
      <Text>Category</Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoryIconName: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    // gap: 10
  },
  category: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 10
  }
})