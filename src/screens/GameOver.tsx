import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@types';

const GameOver: React.FC<StackScreenProps> = ({navigation, route}) => {
  const navigate = navigation?.navigate;
  return (
    <View>
      <Button onPress={() => console.log('nigger')} title="GameOver" />
      <Text>test</Text>
    </View>
  );
};

export default GameOver;
