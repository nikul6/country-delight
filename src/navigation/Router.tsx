import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Home from '../screens/Home';
import Products from '../screens/Products';
import Wallet from '../screens/Wallet';
import Refer from '../screens/Refer';
import More from '../screens/More';
import Header from '../components/Header';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import ProductHeader from '../components/ProductHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

type BottomTabsProps = NativeStackScreenProps<RootStackParamList, "BottomTabs">

function BottomTabs({ navigation }: BottomTabsProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'More') {
            return (
              <Ionicons
                name="filter-sharp"
                size={size}
                color={color}
                style={!focused ? { transform: [{ rotate: '180deg' }] } : null} />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#00AF64',
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Products');
          }
        })}
        options={{
          tabBarIcon: () => <Ionicons name="ios-grid-outline" size={24} color="gray" />
        }}
      />
      <Tab.Screen name="Wallet" component={Wallet}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Wallet');
          }
        })}
        options={{
          tabBarIcon: () => <FontAwesome5 name="wallet" size={24} color="gray" />
        }}
      />
      <Tab.Screen name="Refer" component={Refer}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Refer');
          }
        })}
        options={{
          tabBarIcon: () => <Entypo name="users" size={24} color="gray" />
        }}
      />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products}
          options={({ navigation }) => ({
            headerShown: true,
            header: () => <ProductHeader navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="BottomTabs" component={BottomTabs}
          options={{
            headerShown: true,
            header: () => <Header />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;