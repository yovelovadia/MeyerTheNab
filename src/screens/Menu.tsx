import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@types';
import {routes} from '../navigation';

const Menu: React.FC<StackScreenProps> = ({navigation}) => {
  const navigate = navigation?.navigate;
  return (
    <View>
      <Button onPress={() => console.log('nigger')} title="SEND NUDES" />
      <Button onPress={() => console.log('nigger')} title="SEND NUDES" />
      <Button onPress={() => navigate(routes.game.name)} title="leaderbulbul" />
      <Text>test</Text>
    </View>
  );
};

export default Menu;
