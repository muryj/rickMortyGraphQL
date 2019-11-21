import React from 'react';
import {
  View, Text, FlatList, ActivityIndicator
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import styles from './styles';
import HeroElement from '../../components/HeroElement';

export default function EpisodeDetails(props) {
  const episode = props.navigation.getParam('episode', null);
  const GET_EPISODE = gql`
    query {
      episode(id: ${episode.id}) {
        name
        air_date
        episode
        characters {
          name
          gender
          status
          species
          image
          id
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_EPISODE);

  const showEpisodeDetails = function () {
    if (loading) {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      );
    }
    if (error) {
      alert('Something went wrong');
      return null;
    }
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {`Episode name: ${data.episode.name} ${data.episode.episode}`}
          </Text>
          <Text style={styles.text}>
            {`Episode date: ${data.episode.air_date}`}
          </Text>
          <Text style={styles.titleText}>
            Heroes list:
          </Text>
        </View>
        <FlatList
          data={data.episode.characters}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HeroElement
              onPress={() => props.navigation.navigate('HeroDetails', { hero: { character: item } })}
              name={item.name}
              image={item.image}
            />
          )}
          initialNumToRender={10}
        />
      </View>
    );
  };
  return <View style={styles.container}>{showEpisodeDetails()}</View>;
}
