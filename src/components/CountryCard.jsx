/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CountryCard = ({
  flag,
  title,
  population,
  region,
  capital,
  countryData,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${title}`, { state: countryData });
    console.log(countryData);
  };

  return (
    <div
      onClick={handleClick}
      className="shadow-lg w-72 lg:w-64 bg-white dark:bg-darkBlueElements overflow-hidden transform transition hover:scale-105 duration-300"
    >
      <img className="w-full h-40" src={flag} alt="Country flag" />
      <div className="pr-2 pl-5 pb-10">
        <p className="pt-3 pb-3">
          <span className="font-bold">{title}</span>
        </p>
        <p>
          <span className="font-medium">Population:</span> {population}
        </p>
        <p>
          <span className="font-medium">Region:</span> {region}
        </p>
        <p>
          <span className="font-medium">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
