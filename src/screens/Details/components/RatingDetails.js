import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../styles';

const RatingDetails = () => {
  return (
    <View style={styles.ratingContainer}>
      <Image
        source={require('../../../../assets/images/star.png')}
        style={styles.star}
      />
      <Image
        source={require('../../../../assets/images/star.png')}
        style={styles.star}
      />
      <Image
        source={require('../../../../assets/images/star.png')}
        style={styles.star}
      />
      <Image
        source={require('../../../../assets/images/star.png')}
        style={styles.star}
      />
      <Image
        source={require('../../../../assets/images/star.png')}
        style={styles.star}
      />
      <Text style={styles.ratingText}>5.0</Text>

      <Text style={styles.ratingReviews}>(7.932 reviews)</Text>
    </View>
  );
};

export default RatingDetails;
