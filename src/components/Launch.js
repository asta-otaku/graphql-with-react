import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      name
      id
      cores {
        core
      }
    }
  }
`;

function Launch() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id },
  });

  useEffect(() => {
    console.log(id, "laucnh id");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <h1>Test</h1>;
}

export default Launch;
