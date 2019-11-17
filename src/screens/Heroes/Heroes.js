import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Heroes(props) {
  return (
    <View style={styles.container}>
      <Text>Heroes screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HeroDetails')}
      >
        <Text>Navigate to Hero Details</Text>
      </TouchableOpacity>
    </View>
  );
}
