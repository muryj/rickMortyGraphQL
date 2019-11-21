import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function Input(props) {
  return (
    <TextInput
      style={[styles.inputContainer, props.style]}
      placeholder={props.placeholder}
      placeholderTextColor="yellow"
      onChangeText={(text) => props.onChangeText(text)}
      value={props.value}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
}
