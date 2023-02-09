import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';
import colors from '../../../constants/colors';

const SizeDetails = () => {
  return (
    <View style={styles.sizeContainer}>
      <View style={{ width: '60%' }}>
        <View sytle={styles.sizeColumn}>
          <Text style={styles.sizeText}>Choose Size</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.size}>
              <Text style={styles.sizeChoose}>S</Text>
            </View>
            <View style={styles.size}>
              <Text style={styles.sizeChoose}>M</Text>
            </View>
            <View style={[styles.size, styles.sizeColor]}>
              <Text style={styles.sizeTextL}>L</Text>
            </View>
            <View style={styles.size}>
              <Text style={styles.sizeChoose}>XL</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ width: '40%' }}>
        <View sytle={styles.sizeColumn}>
          <Text style={styles.sizeText}>Color</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.sizeColor, styles.color1]}></View>
            <View style={[styles.sizeColor, styles.color2]}></View>
            <View style={[styles.sizeColor, styles.color3]}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SizeDetails;
