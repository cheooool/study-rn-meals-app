import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';

import { NavigationContainer } from '@react-navigation/native';

import MealsNavigator from './navigation/MealsNavigator';

const rootReducers = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducers);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.error}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
