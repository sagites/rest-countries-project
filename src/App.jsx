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
            <div className="p-4 bg-veryLightGrayBackground dark:bg-darkBlueBackground transition-colors duration-500 dark:text-whiteTextElements md:px-14">
              <div className="flex flex-col md:flex-row md:justify-between pt-3 pb-3 mb-8">
                <input
                  type="text"
                  placeholder="Search for a country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border dark:bg-darkBlueElements placeholder-darkGrayInput border-none focus:outline-none shadow-sm rounded-lg p-3"
                />
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="border dark:bg-darkBlueElements border-none focus:outline-none shadow-sm rounded-lg p-3"
                >
                  <option value="All">Filter by Region</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">Americas</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen lg:grid-cols-4 gap-5 place-items-center">
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