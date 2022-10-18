import React from "react";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      name
      id
      flight_number
      success
      date_local
      cores {
        flight
        core
        landpad
      }
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);
  return data.launches.map(
    ({ id, flight_number, name, date_local, success }) => (
      <div key={id}>
        <h1 className="display-4 my-3">Launches</h1>
        <h3>{name}</h3>
        <br />
        <b>About this location:</b>
        <p>{flight_number}</p>
        <br />
      </div>
    )
  );
}

export default Launches;
