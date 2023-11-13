const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const response = await fetch(`${API_URL}/all`);
  const data = await response.json();
  return data;
};
