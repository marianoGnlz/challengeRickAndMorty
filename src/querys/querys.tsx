import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

export const useQueryCharacter = (actualPage: number) => {
  const query = gql`
    query getCharacters($actualPage: Int) {
      characters(page: $actualPage) {
        info {
          count
          pages
        }
        results {
          name
          image
        }
      }
    }
  `;

  const { data, loading } = useQuery(query, {
    variables: { actualPage },
  });
  return { data, loading };
};
