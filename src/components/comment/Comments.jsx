import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: {
      slug,
    },
  });
  console.log({loading, data});

  return <div>Comments</div>;
}

export default Comments;
