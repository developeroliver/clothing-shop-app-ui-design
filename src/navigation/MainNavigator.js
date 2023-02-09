import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import colors from '../constants/colors';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import FavoritesScreen from '../screens/Favorites/Favorites';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ShoppingScreen from '../screens/Shopping/Shopping';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',

        labelStyle: {
          textAlign: 'center',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 10,
          bottom: 55,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.darkBrown,
          borderRadius: 40,
          height: 64,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIndicator: true,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 12,
                backgroundColor: colors.brown,
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image
                source={require('../../assets/images/home-2.png')}
                resizeMode="cover"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{
          tabBarIndicator: true,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 12,
                backgroundColor: colors.brown,
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image
                source={require('../../assets/images/group.png')}
                resizeMode="cover"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIndicator: true,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 12,
                backgroundColor: colors.brown,
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Image
                source={require('../../assets/images/heart.png')}
                resizeMode="cover"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIndicator: true,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 12,
              }}
            >
              <Image
                source={require('../../assets/images/profile1.png')}
                resizeMode="cover"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : 'grey',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
