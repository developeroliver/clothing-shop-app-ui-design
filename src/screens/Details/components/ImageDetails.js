import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from '../styles';

const ImageDetails = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image
        source={require('../../../../assets/images/image-04.png')}
        resizeMode="cover"
        style={styles.imageContainer}
      />
      <View style={styles.containerIconLeft}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/images/arrowDown.png')}
            style={styles.arrow}
          />
        </Pressable>
      </View>
      <View style={styles.containerIconRight}>
        <Image
          source={require('../../../../assets/images/heartFull.png')}
          style={styles.arrow}
        />
      </View>
    </>
  );
};

export default ImageDetails;
