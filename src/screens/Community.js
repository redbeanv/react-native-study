import * as React from 'react';
import {Button, Text, View} from 'react-native';

function CommunityScreen({navigation, route}) {
  console.log(route);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Community Screen</Text>
    </View>
  );
}

export default CommunityScreen;
