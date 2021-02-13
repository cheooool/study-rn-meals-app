import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CaegoryMealsScreen = (props) => {
  // 넘겨받은 파라메터를 가져올 수 있다.
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // 해당 페이지의 타이틀을 동적으로 변경하는 방법이다.
  // 또는 Stack.Screen의 options={ComponentName.navigationOptions}으로 사용 가능
  // props.navigation.setOptions({ title: selectedCategory.title });

  return (
    <View style={styles.screen}>
      <Text>The Caegory Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
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

CaegoryMealsScreen.navigationOptions = (props) => {
  // 넘겨받은 파라메터를 가져올 수 있다.
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CaegoryMealsScreen;
