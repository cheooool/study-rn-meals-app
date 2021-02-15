import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/colors';

const Stack = createStackNavigator();

const MealsStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      >
        <Stack.Screen
          name="Categories"
          options={{
            title: 'Meal Categories',
          }}
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
    </NavigationContainer>
  );
};

export default MealsStackNavigator;
