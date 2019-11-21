import React from 'react';
import {
  View, FlatList, ImageBackground, ActivityIndicator
} from 'react-native';
import { useQuery } from '@apollo/client';
import styles from './styles';
import images from '../../res/images';
import ListElement from '../../components/ListElement';
import queries from '../../utils/queries';

export default function Episodes(props) {
  const {
    loading, error, data, fetchMore
  } = useQuery(queries.GET_EPISODES, {
    variables: { page: 1 },
  });

  const enreachMore = function () {
    if (data.episodes.info.next !== null) {
      fetchMore({
        variables: {
          page: data.episodes.info.next,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            episodes: {
              ...fetchMoreResult.episodes,
              results: [
                ...prev.episodes.results,
                ...fetchMoreResult.episodes.results,
              ],
            },
          };
        },
      });
    }
  };

  const showEpisodes = function () {
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
      <FlatList
        data={data.episodes.results}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListElement
            onPress={() => props.navigation.navigate('EpisodeDetails', { episode: item })}
            name={item.name}
            date={item.air_date}
          />
        )}
        initialNumToRender={10}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          enreachMore();
        }}
      />
    );
  };

  return (
    <ImageBackground
      source={images.episodesBackground}
      style={styles.imageContainer}
    >
      {showEpisodes()}
    </ImageBackground>
  );
}
