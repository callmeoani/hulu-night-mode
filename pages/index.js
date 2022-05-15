import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Nav from "../components/nav";
import Result from "../components/result";
import request from "../utility/request";

export default function Home({ results }) {
  return (
    <div className="font-Roboto pt-48 md:pt-40">
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: requests.results,
    },
  };
}
