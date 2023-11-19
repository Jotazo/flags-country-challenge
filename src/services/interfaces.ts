export interface ApiCountry {
  name: ApiCountryName;
  capital: string;
  population: number;
  region: string;
  flags: Flag;
}

interface ApiCountryName {
  common: string;
  official: string;
}

interface Flag {
  png: string;
  svg: string;
}
