import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

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
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      {loading && <h4>Loading...</h4>}
      <>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </>
    </>
  );
}

export default Launches;
