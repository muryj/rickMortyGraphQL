import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Heroes from './src/screens/Heroes';
import HeroDetails from './src/screens/HeroDetails';
import Episodes from './src/screens/Episodes';
import EpisodeDetails from './src/screens/EpisodeDetails';
import TabBarIcon from './src/components/TabBarIcon';

const HeroesStack = createStackNavigator({
  Heroes: {
    screen: Heroes,
    navigationOptions: () => ({
      title: 'Heroes',
      headerStyle: {
        backgroundColor: 'rgba(68, 108, 179, 1)',
      },
      headerTintColor: 'yellow'
    }),
  },
  HeroDetails: {
    screen: HeroDetails,
    navigationOptions: () => ({
      title: 'Hero Details',
      headerStyle: {
        backgroundColor: 'rgba(68, 108, 179, 1)',
      },
      headerTintColor: 'yellow'
    }),
  },
});

const EpisodesStack = createStackNavigator({
  Episodes: {
    screen: Episodes,
    navigationOptions: () => ({
      title: 'Episodes',
      headerStyle: {
        backgroundColor: 'rgba(68, 108, 179, 1)',
      },
      headerTintColor: 'yellow'
    }),
  },
  EpisodeDetails: {
    screen: EpisodeDetails,
    navigationOptions: () => ({
      title: 'Episode Details',
      headerStyle: {
        backgroundColor: 'rgba(68, 108, 179, 1)',
      },
      headerTintColor: 'yellow'
    }),
  },
  HeroDetails: {
    screen: HeroDetails,
    navigationOptions: () => ({
      title: 'Hero Details',
      headerStyle: {
        backgroundColor: 'rgba(68, 108, 179, 1)',
      },
      headerTintColor: 'yellow'
    }),
  },
});
const TabNavigator = createBottomTabNavigator({
  Episodes: {
    screen: EpisodesStack,
    navigationOptions: () => ({
      title: 'Episodes',
      tabBarIcon: ({ tintColor }) => <TabBarIcon name="episodes" color={tintColor} />
    }),
  },
  Heroes: {
    screen: HeroesStack,
    navigationOptions: () => ({
      title: 'Heroes',
      tabBarIcon: ({ tintColor }) => <TabBarIcon name="heroes" color={tintColor} />,
    }),
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: 'rgba(245, 230, 83, 1)',
    }
  }
});

const Root = createAppContainer(TabNavigator);

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql/',
  }),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

export default App;
