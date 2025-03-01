import {  StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Layout({children}) {
  return (
    <>
    <StatusBar />
    {/* <Header /> */}
    <View >
      {children}
    </View> 
    <View style={styles.footer}>      
    <Footer />
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  footer:{
    position: 'absolute',
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 1,
    borderTopWidth: 0.2,
    borderColor: '#000',
    width: '100%',

  }
})