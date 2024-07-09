import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <h1>Failed to load</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </Layout>
  );
}
