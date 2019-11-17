import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function EpisodeDetails(props) {
  return (
    <View style={styles.container}>
      <Text>Episode details screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HeroDetails')}
      >
        <Text>Navigate to Hero Details</Text>
      </TouchableOpacity>
    </View>
  );
}
