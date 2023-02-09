import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import HeaderCheckout from './components/HeaderCheckout/HeaderCheckout';
import CardCheckout from './components/CardCheckout/CardCheckout';
import styles from './styles';
import ShippingCheckout from './components/ShippingCheckout/ShippingCheckout';
import DetailsCheckout from './components/DetailsCheckout/DetailsCheckout';

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCheckout />

      <CardCheckout />

      <ShippingCheckout />

      <DetailsCheckout />
    </SafeAreaView>
  );
};

export default CheckoutScreen;
