import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 0,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Button title="profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
}

export default HomeScreen;
