import { useState } from "react";

import useCountries from "./hooks/useCountries";
import { Country } from "./interfaces";

import { DetailPage, MainPage } from "./pages";
import Layout from "./layout/Layout";

import "./App.css";

function App() {
  const { countries, loading } = useCountries();
  const [country, setCountry] = useState<Country | null>(null);

  if (loading) return <Layout>Loading</Layout>;
  return (
    <Layout>
      {country ? (
        <DetailPage country={country} />
      ) : (
        <MainPage countries={countries} />
      )}
    </Layout>
  );
}

export default App;
