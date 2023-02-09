import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.welcome}>Hello, Welcome 👏</Text>
        <Text style={styles.title}>Albert Stevano</Text>
      </View>
      <View>
        <Image
          source={require('../../../../../assets/images/profile.png')}
          style={styles.profile}
        />
      </View>
    </View>
  );
};

export default Header;
