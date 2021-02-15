import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CaegoryMealsScreen = (props) => {
  // 넘겨받은 파라메터를 가져올 수 있다.
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) !== -1
  );
  // 해당 페이지의 타이틀을 동적으로 변경하는 방법이다.
  // 또는 Stack.Screen의 options={ComponentName.navigationOptions}으로 사용 가능
  // props.navigation.setOptions({ title: selectedCategory.title });

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CaegoryMealsScreen.navigationOptions = (props) => {
  // 넘겨받은 파라메터를 가져올 수 있다.
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CaegoryMealsScreen;
