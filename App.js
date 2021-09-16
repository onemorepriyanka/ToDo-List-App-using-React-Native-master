
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import ToDoList from './ToDoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Intro from './ToDoList/Intro';

function Home({navigation}) {
  return (
    <View>
      <Text>
        <Button
          title="Press me"
          onPress={() => navigation.navigate('ToDoList')}
        />
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Home" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
