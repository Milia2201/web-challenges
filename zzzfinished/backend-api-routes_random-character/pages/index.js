import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log('data: ', data);
  

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Twitter Name: {data.twitterName}</p>
      <p>Geohash: {data.geohash}</p>
      <p>Birthday: {data.birthday}</p>
    </>
  );
}