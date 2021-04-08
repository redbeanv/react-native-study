import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';

const TodayScreen = ({navigation, route}) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button title="Update count" onPress={() => setCount(c => c + 1)} />
  //     ),
  //   });
  // }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Today Screen</Text>
    </View>
  );
};

export default TodayScreen;
