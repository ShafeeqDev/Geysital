import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';

export const Bsdk = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        style={{
          height: '5%',
          width: '20%',
          backgroundColor: 'red',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('chutiya')}>
        <Text>Bsdk</Text>
      </TouchableOpacity>
    </View>
  );
};
