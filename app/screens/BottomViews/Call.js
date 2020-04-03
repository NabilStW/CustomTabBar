import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {ContactsCard} from '../../components';

class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      name: 'Olivier',
      contacts: [
        {
          id: 1,
          name: 'Nabil El Ouahabi',
          work: 'Developer Junior at Hey',
          charity: 0,
          cost: 2,
          actif: true,
          photo:
            'https://scontent.fbru2-1.fna.fbcdn.net/v/t1.0-9/91787229_1310980599093259_8656236650688413696_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=xZAoKYnufJsAX-crwy_&_nc_ht=scontent.fbru2-1.fna&oh=f87ba2d540253b8f7a5a8db0ab6e5444&oe=5EAB1B23',
        },
        {
          id: 2,
          name: 'Haroun Ammi',
          work: 'Works at TIC',
          charity: 20,
          cost: 1,
          actif: true,
          photo:
            'https://scontent.fbru2-1.fna.fbcdn.net/v/t1.0-9/54407674_1010102252514186_6668196482367094784_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=LPuGgJmqoLoAX89f6-D&_nc_ht=scontent.fbru2-1.fna&oh=79ff37f4d988c31e44cbbc5194cf5fcd&oe=5EAB4B10',
        },
        {
          id: 3,
          name: 'Shady Alshoha',
          work: 'Business Developer at SEC',
          charity: 10,
          cost: 5,
          actif: false,
          photo:
            'https://scontent.fbru2-1.fna.fbcdn.net/v/t1.0-9/73123155_1388662314625784_7106508052521549824_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=7W0ksZc8VmIAX8Aiy6e&_nc_ht=scontent.fbru2-1.fna&oh=ca0e746fc5caa1e8aeae55a5cc254e27&oe=5EAA1624',
        },
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Card
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/search.png')}
            style={{height: 20, width: 20, marginLeft: 30}}
          />
          <TextInput
            placeholder="Find by username"
            placeholderTextColor="#464646"
            placeholderStyle={{fontWeight: 800, color: 'red'}}
            underlineColorAndroid="transparent"
            style={{
              width: '90%',
              height: 43,
              fontSize: 14,
              borderWidth: 0,
              paddingLeft: 20,
            }}
            //keyboardType="numeric"
            defaultValue=""
            onChangeText={text => this.setState({search: text})}
          />
        </Card>

        <View
          style={{
            width: '90%',
          }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 30,
              color: '#122482',
              fontWeight: '800',
            }}>
            {this.state.name},
          </Text>
          <Text style={{fontSize: 30, fontWeight: '700'}}>
            who are you going to call today?
          </Text>
        </View>
        <View style={{width: '90%', marginTop: 40}}>
          <Text style={{fontSize: 18, fontWeight: '800'}}>My contacts</Text>
        </View>
        <View style={{paddingLeft: 10}}>
          <FlatList
            data={this.state.contacts}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <ContactsCard Contact={item} />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Call;
