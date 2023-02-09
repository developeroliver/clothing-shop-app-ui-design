import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles';
import colors from '../../../../constants/colors';

const DetailsCheckout = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={styles.detailsText}>Total (9 items)</Text>
        <Text style={styles.detailsText2}>$131.97</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={styles.detailsText}>Shipping Free</Text>
        <Text style={styles.detailsText2}>$0.00</Text>
      </View>

      <View style={styles.borderCard} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={styles.detailsText}>Sub Total</Text>
        <Text style={styles.detailsText2}>$131.97</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Pay</Text>
      </View>
    </View>
  );
};

export default DetailsCheckout;
