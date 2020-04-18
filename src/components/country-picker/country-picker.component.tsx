import React, { useState, useEffect } from "react";

import { FormControl, NativeSelect } from "@material-ui/core";

import { getCountries } from "../../api";

import "./country-picker.styles.scss";

const CountryPicker: React.FC<any> = ({ setCountryName }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data: any = await getCountries();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div className="selector-container">
      <FormControl>
        <NativeSelect onChange={e => setCountryName(e.target.value)}>
          <option value="">Global</option>
          {countries.length &&
            countries.map((countryName, index) => (
              <option key={index} value={countryName}>
                {countryName}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default CountryPicker;
