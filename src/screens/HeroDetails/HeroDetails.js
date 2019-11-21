import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function HeroDetails(props) {
  const hero = props.navigation.getParam('hero', null);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: hero.character.image }} />
      <Text style={styles.charactersName}>
        {`Name: ${
          hero.character.name
        }`}
      </Text>
      <Text style={styles.charactersName}>
        {`Race: ${
          hero.character.species
        }`}
      </Text>
      <Text style={styles.charactersName}>
        {`Status: ${
          hero.character.status
        }`}
      </Text>
    </View>
  );
}
