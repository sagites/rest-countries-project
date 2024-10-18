import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import countriesData from "../data.json";
import CountryCard from "../src/components/CountryCard";
import CountryDetail from "../src/components/CountryDetail";

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
    <Router>
      <Routes>
        {/* Home page displaying country cards */}
        <Route
          path="/"
          element={
            <div className="p-4 md:pl-12 md:pr-12">
              <div className="flex flex-col pt-3 pb-3 md:justify-between mb-8">
                <input
                  type="text"
                  placeholder="Search for a country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border bg-purple-200 rounded-lg p-3"
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

              <div className="block sm:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCountries.map((country) => (
                  <CountryCard
                    key={country.alpha2Code}
                    flag={country.flags.png}
                    title={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    countryData={country}
                  />
                ))}
              </div>
            </div>
          }
        />
        {/* Detail page route */}
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
