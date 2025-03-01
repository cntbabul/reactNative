import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductsData from '../data/ProductsData';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Layout from '../components/Layout/Layout';

export default function ProductDetails({route}) {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  //get produt details
  useEffect(() => {
   const getProduct = ProductsData.find((p) => p?._id == params?._id);
   setPDetails(getProduct);
  }, [params?._id]);
  // console.log("route",route)
// handle - + button
  const handleAddQty = () => {
    if (qty === 9) return alert("You can't add more than 10");
    setQty((prev)=> prev + 1);
  }
  const handleRemoveQty = () => {
    if (qty === 1) return alert("We don't sell Zero (0) quantity");
    setQty((prev)=> prev - 1);
  }

  const {params} = route;

  return (
    <Layout >
    <View>
      <Image source={{uri: pDetails?.imageUrl}} style={styles.cardImage}/>
      <View>
        <Text style={styles.cardTitle}>{pDetails?.name}</Text>
        <Text style={styles.cardPrice}>₹{pDetails?.price}</Text>
        <Text style={styles.cardDesc}>{pDetails?.description}</Text>
        <View style={styles.cardBtn}>
          <TouchableOpacity style={styles.btnAdd} onPress={() => alert(`${qty}: ${pDetails?.name} added to cart`)}
            disabled={pDetails?.quantity <= 0}
            >
          <Text style={styles.btnText}>{
            pDetails?.quantity > 0 ?"Add to Cart" : "Out of stock "}</Text>
          </TouchableOpacity>
          <View style={styles.qtyContainer}>
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnText} onPress={handleRemoveQty}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{qty}</Text>
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnText} onPress={handleAddQty}>+</Text>
          </TouchableOpacity>
        

          </View>

         
        </View>
      </View>
     
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  cardImage:{
    width: '100%',
    height: 300
  },
  cardTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5
  },
  cardPrice:{
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal: 15
  },
  cardDesc:{
    
      fontSize: 12,
      textAlign: 'left',
      paddingLeft: 5,
      
      backgroundColor: '#ffffff',
  },
  cardBtn:{ 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20
  },
  btnAdd: {
    backgroundColor: "#F5C469",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#2C3335',
    fontWeight: 'bold',
    // textTransform: 'uppercase'
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    width: 15,
    textAlign: 'center'
  }

  

})