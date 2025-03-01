import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/category/Categories'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <Layout >
    <Header />
    <Categories />
    <Banner />
    <Products />
    
    </Layout>
  )
}

const styles = StyleSheet.create({})