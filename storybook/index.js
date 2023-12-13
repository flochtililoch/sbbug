import {AppRegistry} from 'react-native';
import Storybook from './storybook';
import {configure} from '@storybook/react-native';
configure(() => {}, module);

AppRegistry.registerComponent('sbbug', () => Storybook);
