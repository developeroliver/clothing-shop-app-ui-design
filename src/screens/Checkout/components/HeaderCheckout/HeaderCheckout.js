import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from '../../styles';

const HeaderCheckout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <View style={styles.containerIcon}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../../assets/images/arrowDown.png')}
            style={styles.icon}
          />
        </Pressable>
      </View>

      <View>
        <Text>Ckeckout</Text>
      </View>

      <View style={styles.containerIcon}>
        <Image
          source={require('../../../../../assets/images/menu-icon.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default HeaderCheckout;
