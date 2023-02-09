import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../../styles';
import { MaterialIcons } from '@expo/vector-icons';

const ShippingCheckout = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.information}>Shipping Information</Text>

      <View style={styles.containerVisa}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View style={styles.boxVisa}>
            <Image
              source={require('../../../../../assets/images/visa.png')}
              style={{
                width: 45,
                height: 30,
                marginLeft: 20,
              }}
            />
            <Text style={{ paddingLeft: 5 }}>
              **** **** **** 2143
            </Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShippingCheckout;
