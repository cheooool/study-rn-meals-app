import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (props) => {
  // 넘겨받은 파라메터를 가져올 수 있다.
  const mealId = props.route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
