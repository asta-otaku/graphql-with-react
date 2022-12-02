import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      success
      date_local
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { name, flight_number, success, date_local } = data.launch;

  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span> {name}
      </h1>
    </div>
  );
}

export default Launch;
