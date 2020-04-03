/* /src/components/TabBar.js */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import posed from 'react-native-pose';

const windowWidth = Dimensions.get('window').width;

const Scaler = posed.View({
  active: {scale: 1.15},
  inactive: {scale: 1},
});

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //height: 52,
    //elevation: 2,
    //alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 40,
    paddingHorizontal :40,
  },
  tabButton: {flex: 1},
  scaler: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  scaler2: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

const TabBar = props => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
             
              <Scaler
                pose={isRouteActive ? 'active' : 'inactive'}
                style={S.scaler}>
                {renderIcon({route, focused: isRouteActive, tintColor})}
              </Scaler>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
