import axios from "axios";

const defaultURL = "https://covid19.mathdro.id/api";

export const getTotalData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(defaultURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};
