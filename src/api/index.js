import axios from "axios";

const defaultURL = "https://covid19.mathdro.id/api";

export const getTotalData = async countryName => {
  let fetchUrl = defaultURL;

  if (countryName.length) {
    fetchUrl = `${defaultURL}/countries/${countryName}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(fetchUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

export const getTotalDaily = async () => {
  try {
    const { data } = await axios.get(`${defaultURL}/daily`);
    return data.map(({ confirmed, recovered, deaths, reportDate }) => ({
      confirmed,
      recovered,
      deaths,
      reportDate
    }));
  } catch (err) {
    console.log(err);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${defaultURL}/countries/`);
    return countries.map(el => el.name);
  } catch (err) {
    console.log(err);
  }
};
