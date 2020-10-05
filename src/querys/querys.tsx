import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

type Query = {
  data: any;
  loading: boolean;
};

export const useQueryCharacter = (search: string, actualPage: number): Query => {
  const queryCharacter = gql`
    query getCharacter($search: String, , $actualPage: Int) {
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

export const useQueryLocation = (search: string, actualPage: number): Query => {
  const queryLocation = gql`
    query getLocation($search: String, , $actualPage: Int) {
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

  const { data, loading } = useQuery(queryLocation, { variables: { search, actualPage } });

  return { data, loading };
};
