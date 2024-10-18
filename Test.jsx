import { useState, useEffect } from "react";
import countriesData from "./data.json";
import CountryCard from "./src/components/CountryCard";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState(countriesData);

  // Function to handle search and filter
  useEffect(() => {
    const filtered = countriesData
      .filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((country) =>
        region === "All" ? true : country.region === region
      );
    setFilteredCountries(filtered);
  }, [search, region]);

  return (
    <div className="container mx-auto">
      {/* <header className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <button className="text-sm">🌙 Dark Mode</button>
      </header> */}

      <div className="flex  justify-end items-center mb-8">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border bg-purple-200 rounded-lg p-8 w-80"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid sm:grid grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.alpha2Code}
            flag={country.flags.png}
            title={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
        </div>
    </div>
  );
}

export default App;
