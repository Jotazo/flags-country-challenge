export interface Country {
  flag: Flag;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

interface Flag {
  svg: string;
  alt: string;
}
