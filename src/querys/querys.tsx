import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

type Query = {
  data: any;
  loading: boolean;
};
type Params = {
  search: string;
  actualPage: number;
};

export const useQueryCharacter = ({ search, actualPage }: Params): Query => {
  const queryCharacter = gql`
    query getCharacter($search: String, $actualPage: Int) {
      characters(filter: { name: $search }, page: $actualPage) {
        info {
          pages
        }
        results {
          name
          image
        }
      }
    }
  `;

  const { data, loading } = useQuery(queryCharacter, {
    variables: { search, actualPage },
  });
  return { data, loading };
};

export const useQueryLocation = ({ search, actualPage }: Params): Query => {
  const queryLocation = gql`
    query getLocation($search: String, $actualPage: Int) {
      locations(filter: { name: $search }, page: $actualPage) {
        info {
          pages
        }
        results {
          name
          type
          dimension
          residents {
            name
            image
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(queryLocation, {
    variables: { search, actualPage },
  });

  return { data, loading };
};

export const useQueryEpisodes = ({ search, actualPage }: Params): Query => {
  const queryEpisodes = gql`
    query getEpisodes($search: String, $actualPage: Int) {
      episodes(filter: { name: $search }, page: $actualPage) {
        info {
          pages
        }
        results {
          name
          air_date
          episode
          characters {
            name
            image
          }
        }
      }
    }
  `;
  const { data, loading } = useQuery(queryEpisodes, {
    variables: { search, actualPage },
  });

  return { data, loading };
};
