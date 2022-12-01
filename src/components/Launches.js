import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      name
      date_local
      success
      id
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.launches.map((launch) => (
    <LaunchItem key={launch.id} launch={launch} />
  ));
}
