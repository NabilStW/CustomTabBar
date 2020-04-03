import React from 'react';
import {View, Text} from 'react-native';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <View style={{backgroundColor:'red', borderRadius:30, height:50, width:50}}>

      </View>
      <Text style={{fontSize:30}}>
        Profile Screen
      </Text>
    </View>
    )
  }
}

export default Profile;
