import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Categories from './components/Categories/Categories';
import Card from './components/Card/Card';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Input />
      <Categories />
      <Card />
    </SafeAreaView>
  );
};

export default HomeScreen;
