import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
