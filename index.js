/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/AppEntry';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);