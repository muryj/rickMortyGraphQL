import { gql } from '@apollo/client';

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

export default {
  GET_EPISODES,
};
