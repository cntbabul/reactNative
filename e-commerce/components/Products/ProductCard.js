import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({p}) => {
  const navigation = useNavigation();
    // console.log(product._id);
    //productDetails navigation function
    const handleMoreButton = (id) => {
      navigation.navigate('ProductDetails', {_id:id})
    }
  return (
    <View>
      <View style={styles.card}>
        <Image source={{uri: p?.imageUrl}} style={styles.cardImage}/>
        <Text style={styles.cardTitle}>{p?.name}</Text>
        {/* <Text>{p?.price}</Text> */}
        <Text style={styles.cardDesc}>{p?.description.substring(0, 50)}...more</Text>
        <View style={styles.cardBtn}> 
        <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.btnText}>Add to Cart</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.btnDetails} onPress={() => handleMoreButton(p?._id)}>
        <Text style={styles.btnText}>Details</Text>  
        </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    borderWidth: 1,
    borderColor:'lightgray',
    marginVertical: 5,
    marginHorizontal: 8,
    width: '45%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    // marginBottom: 5
  },
  cardDesc:{
    fontSize: 12,
    textAlign:'left',
  },
  cardBtn:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    marginTop: 5   
  },
  btnAdd: {   backgroundColor: '#DFAF2B',
    padding: 5,
    borderRadius: 5,
    color: '#EAF0F1',
    marginHorizontal: 5
  },
  btnDetails: {
    backgroundColor: '#2B2B52',
    padding: 5,
    borderRadius: 5,
    color: '#EAF0F1',
    marginHorizontal: 5
  
  },
  btnText: {
    color: '#EAF0F1',
    fontSize: 10,
  }
  





  })

export default ProductCard