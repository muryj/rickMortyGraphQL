import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Episodes(props) {
  return (
    <View style={styles.container}>
      <Text>Episodes screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('EpisodeDetails')}
      >
        <Text>Navigate to Episode Details</Text>
      </TouchableOpacity>
    </View>
  );
}
