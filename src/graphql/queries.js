import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

export {GET_BLOGS_INFO}
