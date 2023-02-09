import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../../constants/colors';

const CategoriesItem = ({ icon, title, id }) => {
  return (
    <View style={styles.empty}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              id == 2 ? colors.darkBrown : colors.white,
          },
        ]}
      >
        <Image
          source={icon}
          style={[
            styles.icon,
            {
              color: id == 2 ? colors.white : colors.darkBrown,
            },
          ]}
        />
        <Text
          style={[
            styles.title,
            {
              color: id == 2 ? colors.white : colors.darkBrown,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CategoriesItem;
