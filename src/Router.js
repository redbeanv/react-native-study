import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodayScreen from './screens/Today';
import TodoScreen from './screens/Todo';
import RegiInfoScreen from './screens/RegiInfo';
import JournalScreen from './screens/Journal';
import CommunityScreen from './screens/Community';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Scree1n</Text>
    </View>
  );
}

const BottomTabNavigator = () => {
  const BottomTab = createStackNavigator();

  return (
    <BottomTab.Navigator initialRouteName="Tab">
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen
        name="Tab"
        component={BottomTabNavigator}
      />
    </BottomTab.Navigator>
  );
};

const Router = () => {
  const Root = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Today">
        <Root.Screen name="Today" component={TodayScreen} />
        <Root.Screen name="Todo" component={TodoScreen} />
        <Root.Screen name="Journal" component={JournalScreen} />
        <Root.Screen name="community" component={CommunityScreen} />
        <Root.Screen name="RegiInfo" component={RegiInfoScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
