import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useRoute, useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function Footer() {
  const route = useRoute();
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('Home')}>
        <AntDesign size={20} style={[styles.footerIcon, route.name == 'home' && styles.active,]} name="home" />
        <Text style={[styles.menuIonText, route.name == 'home' && styles.active]}>Home</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.menuContainer} onPress={() => alert('Notification')}>
        <AntDesign size={20} style={[styles.footerIcon, route.name == 'notification' && styles.active,]} name="notification" />
        <Text style={[styles.menuIonText, route.name == 'notification' && styles.active]}>Notification</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuContainer} onPress={() => alert('Account')}>
        <AntDesign size={20} style={[styles.footerIcon, route.name == 'account' && styles.active,]} name="user" />
        <Text style={[styles.menuIonText, route.name == 'notification' && styles.active]}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('cart')}>
        <AntDesign size={20}  style={[styles.footerIcon, route.name == 'cart' && styles.active,]} name="shoppingcart" />
        <Text style={[styles.menuIonText, route.name == 'cart' && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('Cart')}>
        <AntDesign size={20}  style={[styles.footerIcon, route.name == 'logout' && styles.active,]} name="logout" />
        <Text style={[styles.menuIonText, route.name == 'logout' && styles.active]}>Logout</Text>
      </TouchableOpacity>
     
     
      
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0.2,
    borderColor: '#000',
    width: '100%',
    padding: 10,
  },
  menuContainer:{
    alignItems: 'center',
  },
  footerIcon: {
    // marginBottom: 5,
    color:'#019031',
   
  },
  menuIonText: {}
})