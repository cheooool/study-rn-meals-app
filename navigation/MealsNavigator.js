import 'react-native-gesture-handler';
import React from 'react';
import { Platform, Text } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/colors';

const Stack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};
const MealsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="Categories"
        options={({ navigation }) => ({
          headerTitle: 'Meal Categories',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="CategoryMeals"
        options={CategoryMealsScreen.navigationOptions}
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultNavOptions,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
        },
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={({ navigation }) => ({
          headerTitle: 'Your Favorites',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const FiltersStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultNavOptions,
      }}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation }) => ({
          headerTitle: 'Filter Meals',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const tabOptionsConfig =
  Platform.OS === 'android'
    ? {
        activeColor: 'white',
        shifting: true,
      }
    : {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
          activeTintColor: Colors.accentColor,
        },
      };
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator {...tabOptionsConfig}>
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
            ) : (
              'Meals'
            ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarColor: Colors.accentColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
            ) : (
              'Favorites'
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
