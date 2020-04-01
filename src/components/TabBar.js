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
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
  route1: {y: -200},
  // route0: {x: 0},
  // route1: {x: tabWidth},
  // route2: {x: tabWidth * 2},
  // route3: {x: tabWidth * 3},
});

const Scaler = posed.View({
  active: {scale: 1.25},
  inactive: {scale: 1},
});

const ScalerMid = posed.View({
  active: {scale: 2},
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
  },
  tabButton: {flex: 1},
  spotLight: {
    width: tabWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotLightInner: {
    width: 48,
    height: 48,
    backgroundColor: '#ee0000',
    borderRadius: 24,
  },
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

  var mid = false;

  if (activeRouteIndex == 1) {
    mid = true;
  } else {
    mid = false;
  }

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
            {mid ? (
              <ScalerMid
                pose={isRouteActive ? 'active' : 'inactive'}
                style={!isRouteActive ? S.scaler : S.scaler2}>
                {renderIcon({route, focused: isRouteActive, tintColor})}
              </ScalerMid>
            ) : (
              <Scaler
                pose={isRouteActive ? 'active' : 'inactive'}
                style={S.scaler}>
                {renderIcon({route, focused: isRouteActive, tintColor})}
              </Scaler>
            )}
            {/* <Scaler
              pose={isRouteActive ? 'active' : 'inactive'}
              style={S.scaler}>
              {renderIcon({route, focused: isRouteActive, tintColor})}
            </Scaler> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
