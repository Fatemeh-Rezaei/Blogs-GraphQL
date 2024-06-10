import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import {GET_AUTHOR_INFO} from "../../graphql/queries"
import { Container } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();

  const {loading, data, errors} = useQuery(GET_AUTHOR_INFO, {
    variables: {slug}
  })

  if(loading) return <h4>Loading...</h4>

  if(errors) return <h4>Errors...</h4>

  console.log(data);

  return <Container maxWidth="lg">
    
  </Container>
}

export default AuthorPage;
