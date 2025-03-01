import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Header() {
  const [searchText, setSearchText] = React.useState('');
  const handleSearch = () => {
    // console.log(searchText);
  }
  return (
    <View  >
      <View style={[styles.search, styles.searchContainer]}>  
      <TextInput placeholder='Search' value={searchText} onChangeText={(text) => setSearchText(text)}/>
      <TouchableOpacity style={styles.searchIcon } onPress={handleSearch}>  
      <FontAwesome name="search" size={20} color="#900" />
      </TouchableOpacity>
      </View>
    </View>
  

  )
}

const styles = StyleSheet.create({
  searchIcon: {flexDirection: 'row',
    alignItems: 'center', 
    padding: 10
  },
  search: {
    // flex: 1,
    flexDirection: 'row',
  justifyContent: 'space-between',
    // width: '50%',
    // height: 40,
  },
  searchContainer: {
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 10,
    margin: '2.5%',
  }
 
})