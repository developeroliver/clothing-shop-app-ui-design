import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';

const ContentDetails = () => {
  return (
    <View style={styles.content}>
      <View style={styles.column}>
        <Text style={styles.text}>Modern light</Text>
        <Text style={styles.text}>clothes</Text>
      </View>

      <View style={styles.add}>
        <View style={styles.addContainer}>
          <Text style={styles.addText}>-</Text>
        </View>

        <Text style={styles.addNumber}>1</Text>

        <View style={styles.addContainer}>
          <Text style={styles.addText}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default ContentDetails;
