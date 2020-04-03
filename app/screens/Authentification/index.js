import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import {Button, Text} from '../../components';
import LinearGradient from "react-native-linear-gradient";

class Authentification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: '',
      email_valid: true,
      username: '',
      password: '',
      code: '',
    };
  }


  componentDidMount = () => {
    this.props.navigation.navigate('App')
  }


  toggle = () => {
    let {login} = this.state;
    this.setState({login: !login});
  };

  signup = () => {
    let error1 = this.validate('email');
    let error3 = this.validate('username');
    let error2 = this.validate('password');
  }

  login = () => {
    let error1 = this.validate('email');
    let error2 = this.validate('password');
  }


  navigate = error => {
    console.log(error);
    if (!error) {
      this.props.navigation.navigate('Main');
    }
  };


  validate = value => {
    let error = false;
    switch (value) {
      case 'email':
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,99}$/i.test(this.state.email)
        ) {
          error = true;
          Alert.alert('Invalid email adress');
        }
        break;
      case 'username':
        if (this.state.username.length < 4) {
          error = true;
          Alert.alert('the username must have at least 4 characters');
        }
        break;
      case 'password':
        if (this.state.password.length < 4) {
          error = true;
          Alert.alert('the password must have at least 4 characters');
        }
        break;
    }
    return error;
  };

  toggleMemory = () => {
    const memory = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const action = {type: 'SET_MEMORY', value: memory};
    this.props.dispatch(action);
  };

  render() {
    const {
      opacity,
      startColor,
      endColor,
      end,
      start,
      locations,
      ...props
    } = this.props;

    const loading = false;
    const {login, email_valid} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.logo_container}>
          <Image
            source={require('../../assets/sneaky-blu.png')}
            style={styles.logo}
          />
        </View>

        <View style={{flex: 5, padding: 40, fontSize: 40}}>
          <View>
            <TextInput
              placeholder="Email Adress"
              secureTextEntry={false}
              keyboardType="email-address"
              style={styles.text_input}
              defaultValue=""
              onChangeText={text => this.setState({email: text})}
            />
            {login ? (
              <View></View>
            ) : (
              <TextInput
                placeholder="Username"
                style={styles.text_input}
                onChangeText={text => this.setState({username: text})}
                defaultValue=""
              />
            )}
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              name="c"
              style={styles.text_input}
              defaultValue=""
              onChangeText={text => this.setState({password: text})}
            />
            {!login ? (
              <View>
                <TextInput
                  placeholder="invitation code (optionnal)"
                  name="d"
                  style={styles.text_input}
                  //keyboardType="numeric"
                  defaultValue=""
                  onChangeText={text => this.setState({code: text})}
                />
                <View style={{alignItems: 'center', paddingTop: 20}}>
                  <Text gray>By registering, you agree to our</Text>
                  <TouchableOpacity
                    style={{paddingVertical: 5}}
                    onPress={() => {
                      Linking.openURL(
                        'https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/43121769_570180933413468_67877169224744960_o.jpg?_nc_cat=111&_nc_eui2=AeG3dsbKPO4v5qHPOgjgAoRQ1Ajbhr-OER23xGZ8TQnctaYFhpmbN830T1ma-Mr3aIac4Rdh27stc1xwSG4WfNjlGaHZWJ1RlN9MZF7NT4IROQ&_nc_ohc=SC8MO4PO-IEAX_fTije&_nc_ht=scontent-bru2-1.xx&oh=b85168a0f7b60a8c1e0f6b85a35ca13c&oe=5ED6FF03',
                      );
                    }}>
                    <Text style={{color: "#257CF3"}}>Terms of use</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View></View>
            )}

            
            {login ? (
              <Button gradient onPress={() => this.login()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={{fontSize: 16}} bold white center>
                    LOGIN
                  </Text>
                )}
              </Button>
            ) : (
              <Button gradient onPress={() => this.signup()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={{fontSize: 16}} bold white center>
                    SIGNUP
                  </Text>
                )}
              </Button>
            )}

            {login ? (
              <View style={{alignItems: 'center', padding: 30}}>
                <Text light gray>
                  Not yet registered?
                </Text>
                <TouchableOpacity
                  style={{alignItems: 'center', padding: 10}}
                  onPress={() => this.toggle()}>
                  <Text h3 semibold style={{color: "#257CF3"}}>
                    Create an account
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{alignItems: 'center', padding: 20}}>
                <Text light gray>
                  Already registered?
                </Text>
                <TouchableOpacity
                  style={{alignItems: 'center', padding: 10}}
                  onPress={() => this.toggle()}>
                  <Text h3 semibold style={{color: "#257CF3"}}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo_container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 140,
    height: 200,
    margin: 0,
  },
  text_input: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0.5,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});



export default Authentification
