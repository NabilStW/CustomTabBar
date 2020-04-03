/* /src/router/index.js */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {TabBar} from '../components';

import {Call, Profile, Authentification} from '../screens';

const TabNavigator = createMaterialTopTabNavigator(
  {
    HomeScreen: {
      screen: Call,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {tintColor === '#4F4F4F' ? (
              <View>
                <Image
                  source={require('../assets/call_after.png')}
                  style={{width: 85, height: 85}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={require('../assets/call_before.png')}
                  style={{width: 85, height: 85}}></Image>
              </View>
            )}
          </View>
        ),
      },
    },
    SearchScreen: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            {tintColor === '#4F4F4F' ? (
              <View>
                <Image
                  source={require('../assets/profil_after.png')}
                  style={{width: 85, height: 85}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={require('../assets/profil_before.png')}
                  style={{width: 85, height: 85}}></Image>
              </View>
            )}
          </View>
        ),
      },
    },
  },

  {
    tabBarComponent: TabBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#4F4F4F',
      inactiveTintColor: '#ddd',
    },
  },
);

const Login = createStackNavigator({
  Authentification: {
    screen: Authentification,
    navigationOptions: {
      title: 'Inscription',
      headerShown: false,
      animationEnabled: false,
    },
  },
  App: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
});

export default createAppContainer(Login);
