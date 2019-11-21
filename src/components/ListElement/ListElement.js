import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function ListElement(props) {
  return (
    <TouchableOpacity
      style={[styles.episodeContainer, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.date}>{props.date}</Text>
    </TouchableOpacity>
  );
}
