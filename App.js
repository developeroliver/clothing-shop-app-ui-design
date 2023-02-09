import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  // fonts
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require('./assets/fonts/EncodeSans-Black.ttf'),
          bold: require('./assets/fonts/EncodeSans-Bold.ttf'),
          extraBold: require('./assets/fonts/EncodeSans-ExtraBold.ttf'),
          extraLight: require('./assets/fonts/EncodeSans-ExtraLight.ttf'),
          light: require('./assets/fonts/EncodeSans-Light.ttf'),
          medium: require('./assets/fonts/EncodeSans-Medium.ttf'),
          regular: require('./assets/fonts/EncodeSans-Regular.ttf'),
          semiBold: require('./assets/fonts/EncodeSans-SemiBold.ttf'),
          thin: require('./assets/fonts/EncodeSans-Thin.ttf'),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  if (!appIsLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
