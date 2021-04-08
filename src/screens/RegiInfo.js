import * as React from 'react';
import {Button, Text, TextInput} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';

const RegiInfoScreen = ({navigation, route}) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button title="Update count" onPress={() => setCount(c => c + 1)} />
			),
		});
	}, [navigation]);

	return <Text>RegiInfo Page</Text>;
};

export default RegiInfoScreen;
