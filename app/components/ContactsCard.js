import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';

class ContactsCard extends React.Component {
  render() {
    const {Contact} = this.props;

    return (
      <TouchableOpacity
        //   onPress={() => navigation.navigate('ContactsCard', {ContactsCard})}
        onPress={() => console.log('heeey')}
        style={{marginHorizontal: 10, marginVertical: 20}}>
        <Card style={{height: 230, width: 165}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#122482',
                fontSize: 18,
                fontWeight: '800',
                paddingLeft: 5,
                paddingTop: 5,
              }}>
              ${Contact.cost}
            </Text>
            <Text
              style={{
                color: '#122482',
                fontSize: 13,
                fontWeight: '800',
                paddingTop: 10,
              }}>
              /min
            </Text>
            {Contact.actif ? (
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: '#6FBF34',
                  borderRadius: 20,
                  position: 'absolute',
                  right: 7,
                  top: 10,
                }}></View>
            ) : (
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: 'red',
                  borderRadius: 20,
                  position: 'absolute',
                  right: 7,
                  top: 10,
                }}></View>
            )}
          </View>
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              marginTop: 10,
              width: '90%',
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: Contact.photo}}
              style={{width: 65, height: 65, borderRadius: 50}}
            />
            <Text style={{fontWeight: '700', marginTop: 8}}>
              {Contact.name}
            </Text>
            <Text
              style={{
                fontWeight: '500',
                marginTop: 7,
                fontSize: 14,
                textAlign: 'center',
              }}>
              {Contact.work}
            </Text>

            {Contact.charity === 0 ? (
              <View />
            ) : (
              <View
                style={{
                  backgroundColor: 'gray',
                  width: '95%',
                  height: 0.5,
                  position: 'absolute',
                  bottom: 70,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assets/heart.png')}
                    style={{height: 20, width: 20, marginLeft: 4, marginTop: 7}}
                  />
                  <Text
                    style={{
                      marginLeft: 4,
                      marginTop: 8,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    {Contact.charity}% goes to charity
                  </Text>
                </View>
              </View>
            )}
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default ContactsCard;
