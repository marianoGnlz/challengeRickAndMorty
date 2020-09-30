import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

type Query = {
  data: any;
  loading: boolean;
};

export const useQueryCharacters = (actualPage: number): Query => {
  const queryPage = gql`
    query getCharacters($actualPage: Int) {
      characters(page: $actualPage) {
        info {
          count
          pages
        }
        results {
          name
          image
          type
          gender
          species
        }
      }
    }
  `;
  const { data, loading } = useQuery(queryPage, {
    variables: { actualPage },
  });
  return { data, loading };
};

export const useQueryCharacter = (search: string): Query => {
  const queryCharacter = gql`
    query getCharacter($search: String) {
      characters(filter: { name: $search }) {
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
    variables: { search },
  });
  return { data, loading };
};

export const useQueryLocations = (actualPage: number): Query => {
  const queryLocations = gql`
    query getLocations {
      locations {
        info {
          pages
        }
        results {
          name
          type
          dimension
          residents {
            name
          }
        }
      }
    }
  `;
  const { data, loading } = useQuery(queryLocations);

  return { data, loading };
};
