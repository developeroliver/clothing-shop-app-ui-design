import { View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';

const DescriptionDetails = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>
        Its simple and elegant shape makes it perfect for those of you
        who like you who want minimalist clothes
        <Text style={styles.descriptionTextBold}> Read More...</Text>
      </Text>
    </View>
  );
};

export default DescriptionDetails;
