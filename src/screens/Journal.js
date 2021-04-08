import {Button, Text, View} from 'react-native';
import * as React from 'react';

function JournalScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Journal Screen</Text>
      <Text>itemId: </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {itemId: Math.floor(Math.random() * 100)})
        }
      />
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Update param"
        onPress={() =>
          navigation.setParams({itemId: Math.floor(Math.random() * 100)})
        }
      />
    </View>
  );
}

export default JournalScreen;
