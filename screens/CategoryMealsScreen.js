import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CaegoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Caegory Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CaegoryMealsScreen;
