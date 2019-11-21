import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

export default function HeroElement(props) {
  return (
    <TouchableOpacity
      style={[styles.episodeContainer, props.style]}
      onPress={props.onPress}
    >
      <Image style={styles.image} source={{ uri: props.image }} />
      <Text style={styles.name}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}
