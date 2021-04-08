import * as React from 'react';
import {Button, TextInput} from 'react-native';

const TodoScreen = ({navigation, route}) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeHolder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: '' + 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
};

export default TodoScreen;
