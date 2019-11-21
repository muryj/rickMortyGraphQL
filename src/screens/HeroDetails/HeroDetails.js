import React, { useEffect } from 'react';
import {
  View, Text, Image, ActivityIndicator, Alert
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import styles from './styles';
import images from '../../res/images';

export default function HeroDetails(props) {
  const heroId = props.navigation.getParam('heroId', null);
  const GET_HERO = gql`
    query HeroById {
      character(id: ${heroId}) {
        name
        gender
        species
        image,
        status
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_HERO);

  useEffect(() => {
    if (error) {
      alert('Something Went Wrong');
    }
  }, [data]);

  const showDetails = function () {
    if (!Object.values(data.character).includes(null)) {
      return (
        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            source={{
              uri: data.character.image ? data.character.image : images.unknown,
            }}
          />
          <Text style={styles.charactersName}>
            {`Name: ${data.character.name}`}
          </Text>
          <Text style={styles.charactersName}>
            {`Race: ${data.character.species}`}
          </Text>
          <Text style={styles.charactersName}>
            {`Status: ${data.character.status}`}
          </Text>
        </View>
      );
    }
    Alert.alert(
      'Error',
      `There are no Hero with id ${heroId} in database`,
      [
        { text: 'OK', onPress: () => props.navigation.navigate('Heroes') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      ) : showDetails()}
    </View>
  );
}
