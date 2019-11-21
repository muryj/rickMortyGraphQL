import { gql } from '@apollo/client';

const GET_HERO = gql`
    query HeroById {
      character(id: 1) {
        name
        gender
        species
        image,
        status
      }
    }
  `;
const GET_EPISODES = gql`
  query($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        air_date
      }
    }
  }
`;
const GET_EPISODE = gql`
    query {
      episode(id: 1) {
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

export default {
  GET_HERO,
  GET_EPISODES,
  GET_EPISODE,
};
