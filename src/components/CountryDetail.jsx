import { useLocation, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

const CountryDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.href);
  }, []);

  if (!state) {
    return <div>No country data available.</div>;
  }

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
    flag,
    topLevelDomain,
  } = state;

  return (
    <div className="px-14">
      <button
        onClick={() => navigate(-1)}
        className="text-md my-11 flex px-6 py-1 rounded-md shadow-md items-center"
      >
        <BiArrowBack className="pr-1" />
        Back
      </button>

      <div className=" flex flex-col items-center ">
        <div className="w-full items-center">
          <img className="max-w-[500px] min-w-[300px]" src={flag} alt="" />
        </div>
        <div>
          <div className="font-bold text-2xl pb-3">{name}</div>

          <div className=" text-sm">
            <div className="leading-[1.75]">
              <p>
                <span className="font-medium">Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span className="font-medium">Population: </span>
                {population}
              </p>
              <p>
                <span className="font-medium">Region: </span>
                {region}
              </p>
              <p>
                <span className="font-medium">Sub Region: </span>
                {subregion}
              </p>
              <p>
                <span className="font-medium">Capital: </span>
                {capital}
              </p>
            </div>
            <div className="leading-[1.75]">
              <p>
                <span className="font-medium">Top Level Domain: </span>
                {topLevelDomain}
              </p>
              <p>
                <span className="font-medium">Currencies: </span>
                {currencies
                  .map((curr) => `${curr.name} (${curr.symbol})`)
                  .join(", ")}
              </p>
              <p>
                <span className="font-medium">Languages: </span>
                {languages
                  .map((lang) => `${lang.name} (${lang.nativeName})`)
                  .join(", ")}
              </p>
            </div>
          </div>

          <div className="pt-7 pb-4">
            <p>
              <span className="font-medium">Border Countries: </span>
              {borders ? (
                borders.slice(0, 3).map((border, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 px-4 py-0 mr-2 mb-2 text-sm text-gray-700"
                  >
                    {border}
                  </span>
                ))
              ) : (
                <p>No border data available</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
