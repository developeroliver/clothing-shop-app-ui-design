import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import colors from '../../constants/colors';
import ButtonDetails from './components/ButtonDetails';
import ContentDetails from './components/ContentDetails';
import DescriptionDetails from './components/DescriptionDetails';
import ImageDetails from './components/ImageDetails';
import RatingDetails from './components/RatingDetails';
import SizeDetails from './components/SizeDetails';
import styles from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageDetails />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentDetails />

        <RatingDetails />

        <DescriptionDetails />

        <View
          style={{
            borderBottomWidth: 2,
            borderColor: colors.lightGrey,
          }}
        ></View>

        <SizeDetails />

        <ButtonDetails />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
