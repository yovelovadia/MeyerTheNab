import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export interface StackScreenProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
