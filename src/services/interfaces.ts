export interface ApiCountry {
  flags: Flag;
  name: ApiCountryName;
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: ApiCountryCurrency;
  languages?: { [key: string]: string };
  borders?: string[];
  fifa: string;
}

interface ApiCountryName {
  common: string;
  official: string;
  nativeName: ApiCountryNativeName;
}

interface ApiCountryNativeName {
  [key: string]: NativeName;
}

interface NativeName {
  official: string;
  common: string;
}

interface Flag {
  png: string;
  svg: string;
  alt?:  string
}

interface ApiCountryCurrency {
  [key: string]: CountryCurrency;
}

interface CountryCurrency {
  name: string;
  symbol: string;
}
