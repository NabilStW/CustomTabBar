import React from 'react';
import { Text, View } from 'react-native';
//import { FontAwesome } from '@fortawesome/react-native-fontawesome';
//import { Icon} from 'react-native-elements'
import createAnimatedTabNavigator from './createAnimatedBottomTabNavigator';

class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, horizontal }) => (
        <View
           style={{backgroundColor :"red"}} 
           size={horizontal ? 20 : 30}
        >

        </View>
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => alert('hehe')}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

class Away extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, horizontal }) => (
        <View
           style={{backgroundColor :"red"}} 
           size={horizontal ? 20 : 30}
        >

        </View>

    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>💘</Text>
      </View>
    );
  }
}

class Other extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, horizontal }) => (
        <View
           style={{backgroundColor :"red"}} 
           size={horizontal ? 20 : 30}
        >

        </View>
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => alert('oooo')}>🙏</Text>
      </View>
    );
  }
}

export default createAnimatedTabNavigator({
  Home,
  Away,
  Other,
});